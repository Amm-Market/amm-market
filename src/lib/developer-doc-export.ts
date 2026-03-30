const SKIP_ATTRIBUTE = "data-export-skip"

function shouldSkipElement(element: Element): boolean {
  return element.hasAttribute(SKIP_ATTRIBUTE)
}

function cleanInlineText(value: string): string {
  return value
    .replace(/\u00a0/g, " ")
    .replace(/[ \t\r\n]+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim()
}

function getTextContent(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent || ""
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return ""
  }

  const element = node as Element
  if (shouldSkipElement(element)) {
    return ""
  }

  const parts = Array.from(element.childNodes).map(getTextContent)
  return cleanInlineText(parts.join(" "))
}

function renderInlineMarkdown(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent || ""
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return ""
  }

  const element = node as HTMLElement
  if (shouldSkipElement(element)) {
    return ""
  }

  const content = Array.from(element.childNodes).map(renderInlineMarkdown).join("")

  switch (element.tagName) {
    case "A": {
      const text = cleanInlineText(content)
      const href = element.getAttribute("href")
      return text && href ? `[${text}](${href})` : text
    }
    case "STRONG":
    case "B":
      return `**${cleanInlineText(content)}**`
    case "EM":
    case "I":
      return `*${cleanInlineText(content)}*`
    case "CODE":
      return `\`${cleanInlineText(content)}\``
    case "BR":
      return "\n"
    default:
      return content
  }
}

function renderInlinePlainText(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent || ""
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return ""
  }

  const element = node as HTMLElement
  if (shouldSkipElement(element)) {
    return ""
  }

  if (element.tagName === "A") {
    const text = cleanInlineText(Array.from(element.childNodes).map(renderInlinePlainText).join(""))
    const href = element.getAttribute("href")
    return text && href ? `${text} (${href})` : text
  }

  if (element.tagName === "BR") {
    return "\n"
  }

  return Array.from(element.childNodes).map(renderInlinePlainText).join("")
}

function renderInlineChildren(element: Element, mode: "markdown" | "text"): string {
  const renderer = mode === "markdown" ? renderInlineMarkdown : renderInlinePlainText
  return cleanInlineText(Array.from(element.childNodes).map(renderer).join(""))
}

function renderList(list: HTMLElement, mode: "markdown" | "text", depth = 0): string {
  const ordered = list.tagName === "OL"
  const items = Array.from(list.children).filter((child): child is HTMLLIElement => child.tagName === "LI")

  return items
    .map((item, index) => {
      const inlineContent = cleanInlineText(
        Array.from(item.childNodes)
          .filter(
            (child) =>
              !(child.nodeType === Node.ELEMENT_NODE && ["UL", "OL"].includes((child as Element).tagName)),
          )
          .map((child) =>
            mode === "markdown" ? renderInlineMarkdown(child) : renderInlinePlainText(child),
          )
          .join(""),
      )

      const prefix = ordered ? `${index + 1}. ` : "- "
      const indent = "  ".repeat(depth)
      const nestedLists = Array.from(item.children)
        .filter((child): child is HTMLElement => ["UL", "OL"].includes(child.tagName))
        .map((child) => renderList(child, mode, depth + 1))
        .filter(Boolean)

      const lines = [`${indent}${prefix}${inlineContent}`]
      if (nestedLists.length > 0) {
        lines.push(nestedLists.join("\n"))
      }

      return lines.join("\n")
    })
    .join("\n")
}

function renderTable(table: HTMLTableElement, mode: "markdown" | "text"): string {
  const rows = Array.from(table.querySelectorAll("tr"))
    .map((row) =>
      Array.from(row.children)
        .filter((cell): cell is HTMLTableCellElement => ["TH", "TD"].includes(cell.tagName))
        .map((cell) => renderInlineChildren(cell, mode)),
    )
    .filter((row) => row.length > 0)

  if (rows.length === 0) {
    return ""
  }

  if (mode === "text") {
    return rows.map((row) => row.join(" | ")).join("\n")
  }

  const [headerRow, ...bodyRows] = rows
  const separator = headerRow.map(() => "---")
  const markdownRows = [
    `| ${headerRow.join(" | ")} |`,
    `| ${separator.join(" | ")} |`,
    ...bodyRows.map((row) => `| ${row.join(" | ")} |`),
  ]

  return markdownRows.join("\n")
}

function renderDefinitionList(list: HTMLDListElement, mode: "markdown" | "text"): string {
  const blocks: string[] = []
  let currentTerm = ""

  for (const child of Array.from(list.children)) {
    if (shouldSkipElement(child)) {
      continue
    }

    if (child.tagName === "DT") {
      currentTerm = renderInlineChildren(child, mode)
      continue
    }

    if (child.tagName === "DD") {
      const definition = renderInlineChildren(child, mode)
      if (!currentTerm) {
        blocks.push(definition)
        continue
      }

      if (mode === "markdown") {
        blocks.push(`**${currentTerm}**\n${definition}`)
      } else {
        blocks.push(`${currentTerm}\n${definition}`)
      }
    }
  }

  return blocks.join("\n\n")
}

function serializeBlocks(element: Element, mode: "markdown" | "text"): string[] {
  const blocks: string[] = []

  for (const child of Array.from(element.childNodes)) {
    if (child.nodeType === Node.TEXT_NODE) {
      const text = cleanInlineText(child.textContent || "")
      if (text) {
        blocks.push(text)
      }
      continue
    }

    if (child.nodeType !== Node.ELEMENT_NODE) {
      continue
    }

    const node = child as HTMLElement
    if (shouldSkipElement(node)) {
      continue
    }

    switch (node.tagName) {
      case "H1":
      case "H2":
      case "H3":
      case "H4":
      case "H5":
      case "H6": {
        const text = renderInlineChildren(node, mode)
        if (text) {
          if (mode === "markdown") {
            const level = Number(node.tagName[1])
            blocks.push(`${"#".repeat(level)} ${text}`)
          } else {
            blocks.push(text)
          }
        }
        break
      }
      case "P":
      case "FIGCAPTION": {
        const text = renderInlineChildren(node, mode)
        if (text) {
          blocks.push(text)
        }
        break
      }
      case "UL":
      case "OL": {
        const list = renderList(node, mode)
        if (list) {
          blocks.push(list)
        }
        break
      }
      case "TABLE": {
        const table = renderTable(node as HTMLTableElement, mode)
        if (table) {
          blocks.push(table)
        }
        break
      }
      case "DL": {
        const definitionList = renderDefinitionList(node as HTMLDListElement, mode)
        if (definitionList) {
          blocks.push(definitionList)
        }
        break
      }
      case "PRE": {
        const code = node.textContent?.trim()
        if (code) {
          blocks.push(mode === "markdown" ? `\`\`\`\n${code}\n\`\`\`` : code)
        }
        break
      }
      case "HR":
        break
      default:
        blocks.push(...serializeBlocks(node, mode))
    }
  }

  return blocks.filter(Boolean)
}

function normalizeOutput(blocks: string[]): string {
  return blocks
    .map((block) => block.trim())
    .filter(Boolean)
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

export function exportElementToMarkdown(root: HTMLElement): string {
  return normalizeOutput(serializeBlocks(root, "markdown"))
}

export function exportElementToPlainText(root: HTMLElement): string {
  return normalizeOutput(serializeBlocks(root, "text"))
}

export function getExportRootFromElement(element: HTMLElement | null): HTMLElement | null {
  if (!element) {
    return null
  }

  return element.closest("[data-developer-doc-export-root]") as HTMLElement | null
}

export function getReadableText(root: HTMLElement): string {
  return cleanInlineText(getTextContent(root))
}
