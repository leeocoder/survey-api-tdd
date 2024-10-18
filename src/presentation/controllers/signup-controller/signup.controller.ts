import { type HttpRequestProtocol, type HttpResponseProtocol } from '../../protocols'

export class SignUpController {
  handle (httpRequest: HttpRequestProtocol): HttpResponseProtocol {
    if (!httpRequest?.body?.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    if (!httpRequest?.body?.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }

    return {
      statusCode: 200,
      body: 'User signed up successfully'
    }
  }
}
