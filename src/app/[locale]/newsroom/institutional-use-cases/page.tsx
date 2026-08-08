import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("institutional-use-cases")

export { generateMetadata }
export default Page
