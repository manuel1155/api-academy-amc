
export default class HttpError extends Error{
  type: number
  message: string

  constructor(type: number, message: string){
    super(message)
    this.type = type
    this.message = message
  }
}