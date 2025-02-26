import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        mingLength: 2,
        maxLength: 100,
        required: true,
        unique:true
    },
    rubroProducto: {
        type: String,
        required: true
    },
    marcaProducto: {
        type: String,
        required: true
    },
    stockProducto: {
        type: Number,
        required: true
    },
    costoProducto: {
        type: Number
    },
    precioProducto: {
        type: Number,
        min: 2,
        max: 1000000,
        required: true
    },
    subRubroProducto: {
        type: String,
        required: true
    }
});

const Producto = model('producto', productoSchema)

export default Producto