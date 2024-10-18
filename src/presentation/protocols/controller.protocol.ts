import { type HttpRequestProtocol } from './http-request.protocol'
import { type HttpResponseProtocol } from './http-response.protocol'

export interface ControllerProtocol {
  handle: (request: HttpRequestProtocol) => HttpResponseProtocol
}
