'use client'

import { useRouter } from 'next/navigation'

interface ButtonsPaginationProps {
  currentPage: number
  totalPages: number
}

export function ButtonsPagination({
  currentPage,
  totalPages,
}: ButtonsPaginationProps) {
  const router = useRouter()

  const goToPage = (page: number) => {
    router.push(`/blog/${page}`)
  }

  return (
    <div className='flex gap-4 mt-4'>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Siguiente
      </button>
    </div>
  )
}
