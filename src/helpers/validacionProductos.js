import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarProducto = [
    check("nombreProducto")
        .notEmpty()
        .withMessage("El nombre del producto es obligatorio")
        .isLength({min: 2, max: 100})
        .withMessage('El nombre del producto debe tener entre 2 y 100 caracteres como maximo'),
    check("rubroProducto")
        .notEmpty()
        .withMessage("El rubro del producto es obligatorio")
        .isIn(['rubro 1', 'rubro 2', 'rubro 3'])
        .withMessage('Debe ingresar un rubro valido'),
    check("marcaProducto")
        .notEmpty()
        .withMessage("La marca del producto es obligatorio"),
    check("stockProducto")
        .notEmpty()
        .withMessage("La cantidad del producto es obligatorio")
        .isNumeric()
        .withMessage("La cantidad debe ser un numero"),
    check("precioProducto")
        .notEmpty()
        .withMessage("El precio es obligatorio")
        .isNumeric()
        .withMessage('El precio debe ser un numero')
        .custom(((value)=>{
            if (value >= 1 && value <= 100000) {
                return true;
            } else {
                throw new Error('El precio debe estar entre 1 y 100000')
            }
        })),
        (req, res, next)=>{resultadoValidacion(req, res, next)}
    ]

export default validarProducto;