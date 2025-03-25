export const randomYogaFeaturedImages = [
  '/images/random-yoga-featured-image-01.webp',
  '/images/random-yoga-featured-image-02.webp',
  '/images/random-yoga-featured-image-03.webp',
  '/images/random-yoga-featured-image-04.webp',
  '/images/random-yoga-featured-image-05.webp',
  '/images/random-yoga-featured-image-06.webp',
]

export const getRandomYogaImage = () =>
  randomYogaFeaturedImages[
    Math.floor(Math.random() * randomYogaFeaturedImages.length)
  ]
