import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("introducing-automate")

export { generateMetadata }
export default Page
