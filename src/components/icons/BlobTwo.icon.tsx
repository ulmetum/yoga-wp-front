import { cn } from '@/utils/mergeClass'

export const BlobTwo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn('fill-turquoise/20', className)}
      viewBox='0 0 200 200'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M26,-10.3C37.2,4.5,52.3,21.7,48.6,27.9C44.9,34.1,22.5,29.3,-0.4,29.5C-23.2,29.7,-46.5,35,-59.4,23.4C-72.3,11.9,-74.9,-16.4,-63.3,-31.4C-51.6,-46.4,-25.8,-48.2,-9.2,-42.8C7.4,-37.5,14.7,-25.1,26,-10.3Z'
        transform='translate(100 100)'
      />
    </svg>
  )
}
