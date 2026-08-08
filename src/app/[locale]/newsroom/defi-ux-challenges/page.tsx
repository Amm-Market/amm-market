import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("defi-ux-challenges")

export { generateMetadata }
export default Page
