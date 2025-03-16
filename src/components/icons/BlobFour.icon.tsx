import { cn } from '@/utils/mergeClass'

export const BlobFour = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn('fill-sky-pale/20', className)}
      viewBox='0 0 200 200'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M57.9,-29.6C68.9,-14.3,67.6,12,55.9,28.1C44.2,44.2,22.1,50.2,2.7,48.6C-16.7,47,-33.4,38,-47.5,20.5C-61.7,3,-73.3,-23,-64.9,-36.8C-56.6,-50.6,-28.3,-52.2,-2.4,-50.7C23.4,-49.3,46.8,-44.9,57.9,-29.6Z'
        transform='translate(100 100)'
      />
    </svg>
  )
}
