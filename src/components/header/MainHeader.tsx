import { getMainMenuAction } from '@/actions/menus/get-main-menu.action'
import { CustomError } from '@/components/CustomError'
import { Navbar } from '@/components/header/components/Navbar'

export const MainHeader = async () => {
  const { data, error } = await getMainMenuAction()

  // console.log({ data, error })

  if (error) {
    return <CustomError error={error} />
  }

  return (
    <header>
      <Navbar data={data} />
    </header>
  )
}

{
  /* <div className='header-bar absolute bottom-[calc(2.5%+(var(--header-bar-height)/2))] left-1/2 h-[var(--header-bar-height)] w-[var(--header-bar-width)] -translate-x-1/2 rounded-full transition-all duration-1000'></div> */
}
