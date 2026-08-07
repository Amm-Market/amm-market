import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("integration-guide")

export { generateMetadata }
export default Page
