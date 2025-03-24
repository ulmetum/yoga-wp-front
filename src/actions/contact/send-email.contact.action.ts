'use server'

// import { sendEmail } from '@/utils/brevo'
import {
  formContact,
  formContactSchema,
} from '@/validations/form-contact.schema'
import { cookies } from 'next/headers'

export async function sendEmailContactAction(data: formContact) {
  const dataParsed = formContactSchema.safeParse(data)

  if (!dataParsed.success) {
    return { error: 'Los datos del formulario son incorrectos', data: null }
  }

  const cookieStore = await cookies()
  if (data.remember_me) {
    cookieStore.set('email', data.email, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      path: '/contacto',
    })
  } else {
    cookieStore.delete('email')
  }

  try {
    // await sendEmail({
    //   action: 'respond', // Se debe enviar un coreo de respuesta automática
    //   to: [{ name: 'Míriam', email: 'laisladelyoga@gmail.com' }],
    //   templateId: 3, // Plantilla para la web laisladelyoga.com
    //   params: {
    //     ...data,
    //     website: 'laisladelyoga.com',
    //   },
    // })
    throw new Error('Error al enviar el correo')

    return { success: true, name: data.name }
  } catch (error) {
    console.log({ error })
    return { success: false, name: 'No hay nombre' }
  }
}
