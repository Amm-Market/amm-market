import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("aave-v4-avana-spoke")

export { generateMetadata }
export default Page
