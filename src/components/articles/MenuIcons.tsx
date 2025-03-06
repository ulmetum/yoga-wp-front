import { Spotify } from '@/components/icons/Spotify.icon'
import { Instagram } from '@/components/icons/Instagram.icon'
import { Tiktok } from '@/components/icons/Tiktok.icon'
import { Youtube } from '@/components/icons/Youtube.icon'
import { cn } from '@/utils/mergeClass'

interface Props {
  classNames?: string
  color?: 'alternative' | 'dark'
  size?: 'small' | 'medium' | 'large'
}

export const MenuIcons = ({
  classNames,
  color = 'dark',
  size = 'small',
}: Props) => {
  return (
    <nav className={cn('flex', classNames)}>
      <a
        title='Spotify'
        href='#'
        target='_blank'
      >
        <Spotify
          color={color}
          size={size}
        />
      </a>
      <a href=''>
        <Instagram
          color={color}
          size={size}
        />
      </a>
      <a href=''>
        <Tiktok
          color={color}
          size={size}
        />
      </a>
      <a href=''>
        <Youtube
          color={color}
          size={size}
        />
      </a>
    </nav>
  )
}
