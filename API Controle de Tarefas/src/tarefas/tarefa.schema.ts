import { Schema, model } from "mongoose";

const tarefaSchema = new Schema(
  {
    titulo: String,
    descricao: String,
    data_criacao: String,
    data_conclusao: String,
    tipo: String,
    status: {
      pendente: String,
      andamento: String,
      concluida: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Tarefa", tarefaSchema);
