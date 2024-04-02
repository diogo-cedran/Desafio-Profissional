import { Schema, model } from "mongoose";

const usuarioSchema = new Schema(
  {
    username: String,
    peso: Number,
    senha: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

export default model("Usuarios", usuarioSchema);
