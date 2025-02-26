import { Router } from "express";
import {
  obtenerProductos,
  crearProducto,
  obtenerProducto,
  borrarProducto,
  editarProducto,
} from "../controllers/productos.controllers";
import validarProducto from "../helpers/validacionProductos";

const router = Router();

router
  .route("/productos")
  .get(obtenerProductos)
  .post(validarProducto, crearProducto);

router
  .route("/productos/:id")
  .get(obtenerProducto)
  .delete(borrarProducto)
  .put(validarProducto, editarProducto);

export default router;
