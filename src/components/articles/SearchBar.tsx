'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'
import { Close } from '@/components/icons/Close.icon'

interface Props {
  placeholder: string
}

export const SearchBar = ({ placeholder }: Props) => {
  const searchParams = useSearchParams()
  const [term, setTerm] = useState(searchParams.get('query') || '')
  const { replace } = useRouter()

  const handleClear = () => {
    setTerm('')
    const params = new URLSearchParams(searchParams)
    params.delete('query')
    replace(`/blog/?${params.toString()}`, { scroll: false })
  }
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`/blog/?${params.toString()}`, { scroll: false })
  }

  return (
    <form
      onSubmit={handleSearch}
      className='max-w-md mx-auto'
    >
      <label
        htmlFor='default-search'
        className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <svg
            className='w-4 h-4 text-primary dark:text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
        </div>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type='search'
          name='search'
          id='default-search'
          className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:primary focus:outline-primary dark:bg-gray-700 dark:border-gray-600 placeholder-dark/50 dark:text-white dark:focus:primary dark:focus:primary'
          placeholder={placeholder}
        />
        {term && (
          <div
            className='group cursor-pointer'
            onClick={handleClear}
          >
            <Close
              size='sm'
              classNames='hover-group:stroke-primary absolute right-[90px] top-1/2 -translate-y-1/2'
            />
          </div>
        )}
        <button
          disabled={term === ''}
          className='text-white absolute end-2.5 bottom-2.5 bg-primary/90 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary transition-all duration-300 hover:cursor-pointer'
        >
          Buscar
        </button>
      </div>
    </form>
  )
}
