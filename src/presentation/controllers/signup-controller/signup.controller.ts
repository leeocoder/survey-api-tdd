import { MissingParamError } from '../../erros'
import { badRequest } from '../../helpers'
import { type ControllerProtocol, type HttpRequestProtocol, type HttpResponseProtocol } from '../../protocols'

export class SignUpController implements ControllerProtocol {
  handle (httpRequest: HttpRequestProtocol): HttpResponseProtocol {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

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
