interface Props {
  classNames?: string
}

export const TimeTable = ({ classNames }: Props) => {
  return (
    <div>
      <div className='w-full md:flex md:justify-center'>
        <div className='overflow-x-scroll sm:overflow-hidden'>
          <table className='table-auto border-separate rounded-md text-left xl:overflow-hidden'>
            <thead>
              <tr>
                <th className='rounded-tl-md border border-zinc-900/20 bg-sky-950/10 p-4'>
                  <p className='block text-center font-heading text-lg font-semibold leading-none text-[var(--secondary)] antialiased'>
                    Horario
                  </p>
                </th>
                <th className='border border-zinc-900/20 bg-sky-950/10 p-4'>
                  <p className='block text-center font-heading text-lg font-semibold leading-none text-[var(--secondary)] antialiased'>
                    Lunes
                  </p>
                </th>
                <th className='border border-zinc-900/20 bg-sky-950/10 p-4'>
                  <p className='block text-center font-heading text-lg font-semibold leading-none text-[var(--secondary)] antialiased'>
                    Martes
                  </p>
                </th>
                <th className='border border-zinc-900/20 bg-sky-950/10 p-4'>
                  <p className='block text-center font-heading text-lg font-semibold leading-none text-[var(--secondary)] antialiased'>
                    Miércoles
                  </p>
                </th>
                <th className='border border-zinc-900/20 bg-sky-950/10 p-4'>
                  <p className='block text-center font-heading text-lg font-semibold leading-none text-[var(--secondary)] antialiased'>
                    Jueves
                  </p>
                </th>
                <th className='rounded-tr-md border border-zinc-900/20 bg-sky-950/10 p-4'>
                  <p className='block text-center font-heading text-lg font-semibold leading-none text-[var(--secondary)] antialiased'>
                    Viernes
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='even:bg-amber-700/10'>
                <td className='border border-zinc-900/20 bg-sky-950/10 p-4'>
                  <p className='block font-sans text-sm font-semibold leading-normal text-[var(--secondary)] antialiased'>
                    09:30 - 11:00
                  </p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 bg-[rgba(var(--purple-pale-rgb),.1)] p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--purple-pale)] antialiased'>
                    Yoga y Meditación
                  </p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 bg-[rgba(var(--turquoise-rgb),.1)] p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--turquoise)] antialiased'>
                    Yoga y Meditación
                  </p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
              </tr>
              <tr className=''>
                <td className='border border-zinc-900/20 bg-sky-950/10 p-4'>
                  <p className='block font-sans text-sm font-semibold leading-normal text-[var(--secondary)] antialiased'>
                    11:15 - 12:15
                  </p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 bg-[rgba(var(--purple-pale-rgb),.1)] p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--purple-pale)] antialiased'>
                    Yoga Adaptado
                  </p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
              </tr>
              <tr className=''>
                <td className='border border-zinc-900/20 bg-sky-950/10 p-4'>
                  <p className='block font-sans text-sm font-semibold leading-normal text-[var(--secondary)] antialiased'>
                    17:00 - 18:30
                  </p>
                </td>
                <td className='border border-zinc-900/20 bg-[rgba(var(--turquoise-rgb),.1)] p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--turquoise)] antialiased'>
                    Yoga y Meditación
                  </p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
              </tr>
              <tr className=''>
                <td className='border border-zinc-900/20 bg-sky-950/10 p-4'>
                  <p className='block font-sans text-sm font-semibold leading-normal text-[var(--secondary)] antialiased'>
                    18:00 - 19:30
                  </p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 bg-[rgba(var(--purple-pale-rgb),.1)] p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--purple-pale)] antialiased'>
                    Yoga y Meditación
                  </p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 bg-amber-700/10 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--primary)] antialiased'>
                    Talleres Mensuales
                  </p>
                </td>
              </tr>
              <tr className=''>
                <td className='border border-zinc-900/20 bg-sky-950/10 p-4'>
                  <p className='block font-sans text-sm font-semibold leading-normal text-[var(--secondary)] antialiased'>
                    19:30 - 21:00
                  </p>
                </td>
                <td className='border border-zinc-900/20 bg-[rgba(var(--purple-pale-rgb),.1)] p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--purple-pale)] antialiased'>
                    Yoga y Meditación
                  </p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 bg-[rgba(var(--purple-pale-rgb),.1)] p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--purple-pale)] antialiased'>
                    Yoga y Meditación
                  </p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
                <td className='border border-zinc-900/20 p-4'>
                  <p className='block font-sans text-sm font-normal leading-normal text-[var(--text)] antialiased'></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ul className='mt-6 w-[min(100%,864.8px)]'>
        <li className='flex items-center gap-2'>
          <div className='h-5 w-5 bg-[rgba(var(--purple-pale-rgb),.3)]'></div>
          <span className='font-heading'>Clases en San Fernando</span>
        </li>

        <li className='flex items-center gap-2'>
          <div className='h-5 w-5 bg-[rgba(var(--turquoise-rgb),.3)]'></div>
          <span className='font-heading'>Clases en Cádiz</span>
        </li>
        <li className='flex items-center gap-2'>
          <div className='h-5 w-5 bg-amber-700/30'></div>
          <span className='font-heading'>Talleres</span>
        </li>
      </ul>
    </div>
  )
}
