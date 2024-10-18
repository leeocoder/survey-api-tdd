import { MissingParamError } from '../../erros'
import { badRequest } from '../../helpers'
import {
  type HttpRequestProtocol,
  type HttpResponseProtocol
} from '../../protocols'

export class SignUpController {
  handle (httpRequest: HttpRequestProtocol): HttpResponseProtocol {
    const requiredFields = ['name', 'email']

    for (const field of requiredFields) {
      if (!httpRequest?.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: 200,
      body: 'User signed up successfully'
    }
  }
}
