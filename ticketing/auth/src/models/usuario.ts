import mongoose from "mongoose"
import { Senha } from "../services/senha"

//descreve as propriedades requiridas para criar um novo usuario
interface UsuarioAtributos {
  email: string
  senha: string
}

//descreve as propriedades que um usuario model precisa
interface UsuarioModel extends mongoose.Model<UsuarioDoc> {
  criar(atributos: UsuarioAtributos): UsuarioDoc
}

//descreve as propriedades que um usuario document precisa
interface UsuarioDoc extends mongoose.Document {
  email: string
  senha: string
}

const usuarioSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.senha
        delete ret.__v
      },
    },
  }
)

usuarioSchema.pre("save", async function (done) {
  if (this.isModified("senha")) {
    const hashed = await Senha.toHash(this.get("senha"))
    this.set("senha", hashed)
  }
  done()
})

usuarioSchema.statics.criar = (atributos: UsuarioAtributos) => {
  return new Usuario(atributos)
}

const Usuario = mongoose.model<UsuarioDoc, UsuarioModel>(
  "Usuario",
  usuarioSchema
)

export { Usuario }
