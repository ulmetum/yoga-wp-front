export type ErrorType =
  | 'ErrorLandingPages'
  | 'ErrorMenu'
  | 'ErrorWriter'
  | 'ErrorArticles'
  | 'ErrorArticle'
  | 'ErrorFormContact'
  | 'ErrorFormProducts'
  | 'ErrorTotalCount'

export const errorMessages: Record<ErrorType, string> = {
  ErrorLandingPages: 'Hubo un error al obtener los datos de los temas',
  ErrorMenu: 'Hubo un error al obtener los datos del menú principal del sitio',
  ErrorWriter: 'Hubo un error al obtener los datos del autor',
  ErrorArticles: 'Hubo un error al obtener los datos de los artículos',
  ErrorArticle: 'Hubo un error al obtener los datos del artículo',
  ErrorFormContact:
    'Se ha producido un error en el envío de tu comentario. Por favor, vuelve a intentarlo más tarde o ponte en contacto conmigo directamente a través del correo electrónico',
  ErrorFormProducts:
    'Se ha producido un error en el envío de los datos del pedido. Por favor, vuelve a intentarlo más tarde o ponte en contacto conmigo directamente a través del correo electrónico',
  ErrorTotalCount: 'Hubo un error al obtener el total de artículos',
}

export class ActionError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ActionError'
  }
}
