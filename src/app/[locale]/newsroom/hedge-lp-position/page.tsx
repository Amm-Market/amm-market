import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("hedge-lp-position")

export { generateMetadata }
export default Page
