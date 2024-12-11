import { Router } from "express";
import { obtenerProductos, crearProducto, obtenerProducto } from "../controllers/productos.controllers";

const router = Router();



router.route('/productos').get(obtenerProductos).post(crearProducto);
router.route('/productos/:id').get(obtenerProducto);


export default router;