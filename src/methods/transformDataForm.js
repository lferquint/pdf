import convertInArray from "../methods/convertInArray.js";
import doProducts from "../methods/doProducts.js";
import db from '../db/db.js';

function transformDataForm(dataForm){
    
    class productos{
        constructor(producto, modelo, precio, color, cantidad){
            this.producto = producto;
            this.modelo = modelo;
            this.precio = Number(precio);
            this.color = color;
            this.cantidad = Number(cantidad);
        }
    }

    

    const data = dataForm;
    data.productos = convertInArray(data.productos);
    data.modelos = convertInArray(data.modelos);
    data.precios = convertInArray(data.precios);
    data.colores = convertInArray(data.colores);
    data.cantidades = convertInArray(data.cantidades);

    let listProducts = [];

    for(let i = 0; i < data.productos.length; i++){
        let producto = new productos(data.productos[i], data.modelos[i], data.precios[i], data.colores[i], data.cantidades[i]);
        producto.descripcion = db.mods[data.modelos[i]][0];
        producto.unidades = db.mods[data.modelos[i]][1];
        producto.subtotal = producto.precio * producto.cantidad;
        listProducts.push(producto);
    }
    data.productos = doProducts(data.productos);
    
    return listProducts;
}
export default transformDataForm;