import { Request, Response } from "express";
import categoriaService from "./categoria.service";

class CategoriaController {
  async create(req: Request, res: Response) {
    try {
      const categoria = await categoriaService.create(req.body);
      return res.json(categoria);
    } catch (error) {
      return error;
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const categoria = await categoriaService.findById(req.params.id);
      return res.json(categoria);
    } catch (error) {
      return error;
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const categoria = await categoriaService.findAll();
      return res.json(categoria);
    } catch (error) {
      return error;
    }
  }

  async update(req: Request, res: Response) {
    try {
      const categoria = await categoriaService.update(req.params.id, req.body);
      return res.json(categoria);
    } catch (error) {
      return error;
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const categoria = await categoriaService.delete(req.params.id);
      return res.json(categoria);
    } catch (error) {
      return error;
    }
  }
}

export default new CategoriaController();
