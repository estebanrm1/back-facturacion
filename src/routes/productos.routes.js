import { Router } from "express";
import { obtenerProductos, crearProducto } from "../controllers/productos.controllers";

const router = Router();



router.route('/productos').get(obtenerProductos).post(crearProducto)

export default router;