import { getMainMenuAction } from '@/actions/menus/get-main-menu.action'
import { CustomError } from '@/components/CustomError'
import { FooterInner } from '@/components/footer/FooterInner'

export const MenuFooter = async () => {
  const { data, error } = await getMainMenuAction()
  if (error) {
    return <CustomError error={error} />
  }

  const menuItems = data?.menuItems?.edges
  return <FooterInner menuItems={menuItems} />
}
