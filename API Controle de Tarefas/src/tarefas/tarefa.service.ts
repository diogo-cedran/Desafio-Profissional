import tarefaModel from "./tarefa.schema";

export class TarefaService {
  static update: any;
  static delete: any;

  async create(tarefa: any) {
    return await tarefaModel.create(tarefa);
  }

  async findById(id: any) {
    return await tarefaModel.findById(id);
  }

  async findAll() {
    return await tarefaModel.find();
  }

  async update(id: any, tarefa: any) {
    return await tarefaModel.findByIdAndUpdate(id, tarefa);
  }

  async delete(id: any) {
    return await tarefaModel.findByIdAndDelete(id);
  }
}

export default new TarefaService();
