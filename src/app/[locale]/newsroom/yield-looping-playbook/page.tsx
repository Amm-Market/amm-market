import { createBlogPage } from "@/lib/blog-page-factory"

const { generateMetadata, Page } = createBlogPage("yield-looping-playbook")

export { generateMetadata }
export default Page
