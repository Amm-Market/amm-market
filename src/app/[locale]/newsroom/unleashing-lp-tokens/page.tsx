import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("unleashing-lp-tokens")

export { generateMetadata }
export default Page
