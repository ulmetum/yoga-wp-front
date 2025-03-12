import { Spotify } from '@/components/icons/Spotify.icon'
import { Instagram } from '@/components/icons/Instagram.icon'
import { Tiktok } from '@/components/icons/Tiktok.icon'
import { Youtube } from '@/components/icons/Youtube.icon'
import { cn } from '@/utils/mergeClass'

interface Props {
  classNames?: string
  color?: 'alternative' | 'dark'
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

export const MenuIcons = ({
  classNames,
  color = 'dark',
  size = 'xs',
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
      <a
        title='Instagram'
        href='#'
      >
        <Instagram
          color={color}
          size={size}
        />
      </a>
      <a
        title='TikTok'
        href='#'
      >
        <Tiktok
          color={color}
          size={size}
        />
      </a>
      <a
        title='Youtube'
        href='#'
      >
        <Youtube
          color={color}
          size={size}
        />
      </a>
    </nav>
  )
}
