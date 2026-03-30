import {
  exportElementToMarkdown,
  exportElementToPlainText,
  getExportRootFromElement,
} from "@/lib/developer-doc-export"

function createRoot(html: string) {
  const root = document.createElement("div")
  root.setAttribute("data-developer-doc-export-root", "")
  root.innerHTML = html
  document.body.innerHTML = ""
  document.body.appendChild(root)
  return root
}

describe("developer doc export", () => {
  it("serializes headings, paragraphs, links, inline code, and lists to markdown", () => {
    const root = createRoot(`
      <h1>Borrow Spoke</h1>
      <p>See <a href="/developers/architecture">architecture</a> and <code>borrow()</code>.</p>
      <ul>
        <li>Track LP collateral</li>
        <li>Draw from the Hub</li>
      </ul>
    `)

    expect(exportElementToMarkdown(root)).toBe(
      "# Borrow Spoke\n\nSee [architecture](/developers/architecture) and `borrow()`.\n\n- Track LP collateral\n- Draw from the Hub",
    )
  })

  it("serializes tables and skips export-skip regions", () => {
    const root = createRoot(`
      <div data-export-skip>
        <p>Hidden controls</p>
      </div>
      <h2>Allowed Pools</h2>
      <table>
        <thead>
          <tr><th>Family</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>Stable</td><td>Supported</td></tr>
        </tbody>
      </table>
    `)

    expect(exportElementToMarkdown(root)).toBe(
      "## Allowed Pools\n\n| Family | Status |\n| --- | --- |\n| Stable | Supported |",
    )
  })

  it("serializes plain text from the same content flow", () => {
    const root = createRoot(`
      <h1>Key Concepts</h1>
      <p>Read the <a href="/developers/introduction/glossary">glossary</a>.</p>
      <ol>
        <li>Deposit collateral</li>
        <li>Borrow assets</li>
      </ol>
    `)

    expect(exportElementToPlainText(root)).toBe(
      "Key Concepts\n\nRead the glossary (/developers/introduction/glossary).\n\n1. Deposit collateral\n2. Borrow assets",
    )
  })

  it("finds the closest export root from nested header controls", () => {
    const root = createRoot(`
      <div>
        <div id="controls" data-export-skip>
          <button type="button">Copy for LLM</button>
        </div>
      </div>
    `)

    const controls = root.querySelector("#controls") as HTMLElement
    expect(getExportRootFromElement(controls)).toBe(root)
  })
})
