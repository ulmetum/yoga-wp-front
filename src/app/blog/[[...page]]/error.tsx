'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center space-y-4'>
      <h1>Algo no fue del todo bien...</h1>
      <button
        className='rounded-lg block bg-primary py-2 px-3.5 font-headings mx-auto  text-light'
        onClick={() => reset()}
      >
        Inténtalo otra vez
      </button>
      <p className='text-primary'>{error.message}</p>
    </div>
  )
}
