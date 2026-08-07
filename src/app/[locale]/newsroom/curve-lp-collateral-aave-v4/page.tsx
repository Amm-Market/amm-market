import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("curve-lp-collateral-aave-v4")

export { generateMetadata }
export default Page
