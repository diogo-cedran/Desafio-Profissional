import { Router } from "express";
import usuarioController from "./src/usuarios/usuario.controller";
import categoriaController from "./src/categorias/categoria.controller";
import tarefaController from "./src/tarefas/tarefa.controller";

const routes = Router();

//Rotas Usuários:
routes.get("/findById/:id", usuarioController.findById);
routes.get("/findAll", usuarioController.findAll);
routes.post("/create", usuarioController.create);
routes.put("/update/:id", usuarioController.update);
routes.delete("/delete/:id", usuarioController.delete);

//Rotas Categorias:
routes.get("/findById/:id", categoriaController.findById);
routes.get("/findAll", categoriaController.findAll);
routes.post("/create", categoriaController.create);
routes.put("/update/:id", categoriaController.update);
routes.delete("/delete/:id", categoriaController.delete);

//Rotas Tarefas:
routes.get("/findById/:id", tarefaController.findById);
routes.get("/findAll", tarefaController.findAll);
routes.post("/create", tarefaController.create);
routes.put("/update/:id", tarefaController.update);
routes.delete("/delete/:id", tarefaController.delete);

export { routes };
