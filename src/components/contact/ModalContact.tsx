'use client'

import { cn } from '@/utils/mergeClass'
import { motion } from 'motion/react'
import { TypeModal } from '@/components/contact/FormContact'
import { Close } from '@/components/icons/Close.icon'

interface Props {
  barClassNames?: string
  colorButton?: 'alternative' | 'dark' | 'light'
  containerClassNames?: string
  content: string
  contentClassNames?: string
  duration: number
  handleCloseModal: () => void
  modal: TypeModal
  title: string
  titleClassNames?: string
  buttonCloseClassNames?: string
}

export const ModalContact = ({
  barClassNames = 'bg-light',
  colorButton = 'light',
  buttonCloseClassNames,
  containerClassNames,
  content,
  contentClassNames,
  duration,
  handleCloseModal,
  modal,
  title,
  titleClassNames,
}: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 1,
        delay: 0.25,
        type: 'spring',
        bounce: 0.55,
        exit: { duration: 0.15 },
      }}
      className={cn(
        'z-30 w-full fixed inset-0 flex items-center justify-center',
        {
          'backdrop-blur-sm': modal,
        }
      )}
    >
      <div
        className={cn(
          'relative flex justify-center flex-col w-[min(100%,768px)] mx-auto ',
          containerClassNames
        )}
      >
        <div
          onClick={handleCloseModal}
          className='absolute top-2 right-2 cursor-pointer'
        >
          <Close
            classNames={buttonCloseClassNames}
            size='xs'
            color={colorButton}
          />
        </div>
        <h2
          className={cn(
            'text-light mb-4 text-3xl my-0 sm:text-5xl text-center',
            titleClassNames
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            'text-light text-lg md:text-2xl text-center',
            contentClassNames
          )}
        >
          {content}
        </p>
        <motion.div
          animate={{ width: modal ? '100%' : 0 }}
          transition={{
            duration: duration / 1000,
            ease: 'linear',
          }}
          className={cn('absolute bottom-1 h-[2px] w-0 left-0', barClassNames)}
        ></motion.div>
      </div>
    </motion.section>
  )
}
