import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("lp-risk-governance")

export { generateMetadata }
export default Page
