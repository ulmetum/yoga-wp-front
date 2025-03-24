export interface SEOBySlug {
  post: Post
}

export interface Post {
  seo: SEO
}

export interface SEO {
  title: string
  description: string
  breadcrumbTitle: string
  openGraph: OpenGraph
}

interface OpenGraph {
  title: string
  description: string
  image: Image
}

interface Image {
  url: string
}
