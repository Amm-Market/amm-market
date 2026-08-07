import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("how-lp-liquidation-should-work")

export { generateMetadata }
export default Page
