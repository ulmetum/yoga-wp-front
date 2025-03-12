import { getMainMenuAction } from '@/actions/menus/get-main-menu.action'
import { CustomError } from '@/components/CustomError'
import { Navbar } from '@/components/header/components/Navbar'

export const MainHeader = async () => {
  const { data, error } = await getMainMenuAction()

  // console.log({ data, error })

  if (error) {
    return (
      <CustomError
        classNames='min-h-[var(--main-header-height)]'
        error={error}
      />
    )
  }

  return (
    <header>
      <Navbar data={data} />
    </header>
  )
}
