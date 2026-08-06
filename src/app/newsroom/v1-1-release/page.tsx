import { createBlogPage } from "@/lib/blog-page-factory"

const { metadata, Page } = createBlogPage("v1-1-release")

export { metadata }
export default Page
