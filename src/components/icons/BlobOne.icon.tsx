import { cn } from '@/utils/mergeClass'

export const BlobOne = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn('fill-primary/20', className)}
      viewBox='0 0 200 200'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M41.7,-25.7C45.8,-17.1,35,-1.5,25.6,15.5C16.2,32.4,8.1,50.8,-3.7,52.9C-15.4,55,-30.9,40.9,-39.6,24.3C-48.3,7.8,-50.3,-11.2,-42.6,-22C-34.8,-32.7,-17.4,-35.3,0.7,-35.7C18.8,-36.1,37.6,-34.4,41.7,-25.7Z'
        transform='translate(100 100)'
      />
    </svg>
  )
}
