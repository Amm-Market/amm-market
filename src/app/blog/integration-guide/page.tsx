import { createBlogPage } from "@/lib/blog-page-factory"

const { metadata, Page } = createBlogPage("integration-guide")

export { metadata }
export default Page
