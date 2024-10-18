import { InvalidParamError, MissingParamError } from '../../erros'
import { badRequest } from '../../helpers'
import {
  type EmailValidatorProtocol,
  type ControllerProtocol,
  type HttpRequestProtocol,
  type HttpResponseProtocol
} from '../../protocols'

export class SignUpController implements ControllerProtocol {
  constructor (private readonly emailValidator: EmailValidatorProtocol) {}

  handle (httpRequest: HttpRequestProtocol): HttpResponseProtocol {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest?.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    const isEmailValid = this.emailValidator.isValid(httpRequest.body.email as string)

    if (!isEmailValid) {
      return badRequest(new InvalidParamError('email'))
    }

    return {
      statusCode: 200,
      body: 'User signed up successfully'
    }
  }
}
