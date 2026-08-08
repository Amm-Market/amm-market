import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("security-deep-dive")

export { generateMetadata }
export default Page
