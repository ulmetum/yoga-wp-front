export interface GetArticleBySlugQuery {
  post: Post
}

interface Post {
  title: string
  author: Author
  featuredImage: FeaturedImage
  headings: Headings
  date: string
  content: string
}

interface Author {
  node: AuthorNode
}

interface AuthorNode {
  name: string
}

interface FeaturedImage {
  node: FeaturedImageNode
}

interface FeaturedImageNode {
  sourceUrl: string
}

interface Headings {
  subtitle: string | null
}
