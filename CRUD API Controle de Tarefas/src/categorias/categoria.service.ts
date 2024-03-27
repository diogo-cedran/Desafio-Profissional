import categoriaModel from "./categoria.schema";

export class CategoriaService {
  static update: any;
  static delete: any;

  async create(categoria: any) {
    return await categoriaModel.create(categoria);
  }

  async findById(id: any) {
    return await categoriaModel.findById(id);
  }

  async findAll() {
    return await categoriaModel.find();
  }

  async update(id: any, categoria: any) {
    return await categoriaModel.findByIdAndUpdate(id, categoria);
  }

  async delete(id: any) {
    return await categoriaModel.findByIdAndDelete(id);
  }
}

export default new CategoriaService();
