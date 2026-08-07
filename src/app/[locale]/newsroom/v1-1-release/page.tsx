import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("v1-1-release")

export { generateMetadata }
export default Page
