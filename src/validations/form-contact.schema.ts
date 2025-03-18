import { z } from 'zod'

export const formContactSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Debe escribir un nombre' })
    .min(5, { message: 'Debe escribir un nombre de al menos 5 caracteres' }),
  email: z
    .string()
    .min(1, { message: 'Debe escribir un correo electrónico' })
    .email({ message: 'El correo electrónico no es válido' }),
  message: z
    .string()
    .min(1, { message: 'Debe escribir un mensaje' })
    .min(5, { message: 'El mensaje es demasiado corto' })
    .max(350, { message: 'El mensaje es demasiado largo' }),
  remember_me: z.boolean().optional(),
  contact_number: z.string().max(0, 'Spam detectado'),
  terms: z.boolean().refine((value) => value === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
})

export type formContact = z.infer<typeof formContactSchema>
