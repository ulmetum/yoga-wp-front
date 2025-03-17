import { API_KEY_BREVO, CRYPTO_KEY } from '@/config'
import * as brevo from '@getbrevo/brevo'
import CryptoJS from 'crypto-js'

const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  API_KEY_BREVO as string
)

interface Props {
  to: { email: string; name: string }[]
  templateId: number
  params: Record<string, any>
  action: 'respond' | 'not-respond'
}

export const sendEmail = async ({
  to,
  templateId,
  params,
  action, // Indica si se debe enviar un correo de respuesta automática tras recibir una respuesta del webhook
}: Props) => {
  try {
    const smtpEmail = new brevo.SendSmtpEmail()
    const customHeader: Record<string, any> = {
      name: params.name,
      email: params.email,
    }

    const iv = CryptoJS.lib.WordArray.random(16)

    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(customHeader),
      CRYPTO_KEY as string,
      { iv }
    ).toString()

    smtpEmail.templateId = templateId
    smtpEmail.to = to
    smtpEmail.tags = [action]
    smtpEmail.params = params
    smtpEmail.sender = {
      email: 'hola@laisladelyoga.com',
      name: 'Míriam',
    }
    smtpEmail.headers = {
      'X-Mailin-Custom': encryptedData,
    }
    const response = await apiInstance.sendTransacEmail(smtpEmail)

    return response
  } catch (error) {
    console.error('Error al enviar el correo:', error)

    if (error instanceof Error) {
      throw new Error(`Fallo al enviar el correo: ${error.message}`)
    } else {
      throw new Error('Fallo al enviar el correo: Error desconocido')
    }
  }
}
