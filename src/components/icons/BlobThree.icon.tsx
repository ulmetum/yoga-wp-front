import { cn } from '@/utils/mergeClass'

export const BlobThree = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn('fill-purple-pale/20', className)}
      viewBox='0 0 200 200'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M60.5,-43.9C66.6,-24.4,51.6,-1.6,38,17.3C24.4,36.3,12.2,51.4,-1.4,52.2C-14.9,53,-29.8,39.4,-39.4,22.8C-48.9,6.2,-53.1,-13.4,-45.7,-33.7C-38.2,-54,-19.1,-74.9,4.1,-77.2C27.2,-79.6,54.4,-63.4,60.5,-43.9Z'
        transform='translate(100 100)'
      />
    </svg>
  )
}
