import { Router } from "express";
import { obtenerProductos, crearProducto, obtenerProducto, borrarProducto } from "../controllers/productos.controllers";

const router = Router();



router.route('/productos').get(obtenerProductos).post(crearProducto);
router.route('/productos/:id').get(obtenerProducto).delete(borrarProducto);


export default router;