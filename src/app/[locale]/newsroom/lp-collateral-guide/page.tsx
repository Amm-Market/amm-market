import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("lp-collateral-guide")

export { generateMetadata }
export default Page
