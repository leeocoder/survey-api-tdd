import { ServerError } from '../erros'
import { type HttpResponseProtocol } from '../protocols'

export const badRequest = (error: Error): HttpResponseProtocol => ({
  statusCode: 400,
  body: error
})

export const serverError = (): HttpResponseProtocol => ({
  statusCode: 500,
  body: new ServerError()
})
