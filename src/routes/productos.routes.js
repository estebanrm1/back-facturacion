import { Router } from "express";
import { obtenerProductos, crearProducto, obtenerProducto, borrarProducto, editarProducto } from "../controllers/productos.controllers";

const router = Router();

router.route('/productos')
.get(obtenerProductos)
.post(crearProducto);

router.route('/productos/:id')
.get(obtenerProducto)
.delete(borrarProducto)
.put(editarProducto);

export default router;