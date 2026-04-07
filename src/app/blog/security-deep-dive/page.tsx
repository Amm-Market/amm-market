import { createBlogPage } from "@/lib/blog-page-factory"

const { metadata, Page } = createBlogPage("security-deep-dive")

export { metadata }
export default Page
