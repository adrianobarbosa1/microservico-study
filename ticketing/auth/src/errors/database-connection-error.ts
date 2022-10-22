import { CustomError } from "./custom-error"

export class DatabaseConnectError extends CustomError {
  statusCode = 500
  reason = "Erro ao conectar com o MongoDB"
  constructor() {
    super("Erro ao conectar com o MongoDB")

    Object.setPrototypeOf(this, DatabaseConnectError.prototype)
  }

  serializeErrors() {
    return [{ message: this.reason }]
  }
}
