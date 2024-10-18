import { MissingParamError } from '../../erros'
import { badRequest } from '../../helpers'
import {
  type HttpRequestProtocol,
  type HttpResponseProtocol
} from '../../protocols'

export class SignUpController {
  handle (httpRequest: HttpRequestProtocol): HttpResponseProtocol {
    if (!httpRequest?.body?.name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!httpRequest?.body?.email) {
      return badRequest(new MissingParamError('email'))
    }

    return {
      statusCode: 200,
      body: 'User signed up successfully'
    }
  }
}
