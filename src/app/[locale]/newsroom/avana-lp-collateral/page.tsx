import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("avana-lp-collateral")

export { generateMetadata }
export default Page
