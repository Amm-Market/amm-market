import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("smart-contract-architecture")

export { generateMetadata }
export default Page
