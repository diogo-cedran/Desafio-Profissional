import usuarioModel from "./usuario.schema";

export class UsuarioService {
  static update: any;
  static delete: any;

  async create(usuario: any) {
    return await usuarioModel.create(usuario);
  }

  async findById(id: any) {
    return await usuarioModel.findById(id);
  }

  async findAll() {
    return await usuarioModel.find();
  }

  async update(id: any, usuario: any) {
    return await usuarioModel.findByIdAndUpdate(id, usuario);
  }

  async delete(id: any) {
    return await usuarioModel.findByIdAndDelete(id);
  }
}

export default new UsuarioService();
