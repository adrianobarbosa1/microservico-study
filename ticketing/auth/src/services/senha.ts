import { scrypt, randomBytes } from "crypto"
import { promisify } from "util"

const scryptAsync = promisify(scrypt)

export class Senha {
  static async toHash(senha: string) {
    const salt = randomBytes(8).toString("hex")
    const buf = (await scryptAsync(senha, salt, 64)) as Buffer
    return `${buf.toString("hex")}.${salt}`
  }

  static async compare(senhaArmazenada: string, senhaFornecida: string) {
    const [hashedSenha, salt] = senhaArmazenada.split(".")
    const buf = (await scryptAsync(senhaFornecida, salt, 64)) as Buffer
    return buf.toString("hex") === hashedSenha
  }
}
