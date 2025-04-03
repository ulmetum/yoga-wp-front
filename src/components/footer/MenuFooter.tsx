import { getMainMenuAction } from '@/actions/menus/get-main-menu.action'
import { CustomError } from '@/components/CustomError'
import { FooterMenuItem } from '@/components/footer/MenuFooterItem'

export const MenuFooter = async () => {
  const { data, error } = await getMainMenuAction()
  if (error) {
    return (
      <CustomError
        classNames=''
        error={error}
      />
    )
  }

  const menuItems = data?.menuItems?.edges
  return (
    <nav
      id='menu-footer'
      className='flex md:order-1 md:w-3/5 md:justify-end'
    >
      <ul className='flex w-[max-content] flex-col md:items-end'>
        {menuItems?.map((item) => (
          <FooterMenuItem
            key={item.node.id}
            item={item}
          />
        ))}
      </ul>
    </nav>
  )
}
