import { MenuItem } from '@/interfaces/main-menu.interface'
import { FooterMenuItem } from '@/components/footer/MenuFooterItem'

interface Props {
  menuItems?: MenuItem[]
}

export const FooterInner = ({ menuItems }: Props) => {
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
