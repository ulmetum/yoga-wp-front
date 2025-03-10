import { FeaturedImageArticle } from '@/components/slug/FeaturedImageArticle'
import { HeadingArticle } from '@/components/slug/HeadingArticle'

interface Props {
  author: string
  title: string
  createdAt: string
  subtitle: string
  image: string
}

export const HeroArticle = ({
  author,
  title,
  createdAt,
  subtitle,
  image,
}: Props) => {
  console.log({ author })
  return (
    <div className='relative flex flex-col items-center justify-center gap-2 xl:flex-row xl:justify-between'>
      <FeaturedImageArticle
        author={author}
        title={title}
        image={image}
      />
      <HeadingArticle
        subtitle={subtitle}
        title={title}
        createdAt={createdAt}
      />
    </div>
  )
}
