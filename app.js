

// ESTO SERIA EL GESTOR DEL MODELO
const jsonDB = require('./jsonDatabase');

// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro
const productModel = jsonDB('products');


// cuando por consola hagamos "node app.js ACCION" 
// dispara, ALL , FIND, CREATE, UPDATE
let accion = process.argv[2];
// algunas operaciones requieren informacion adicional, por ejemplo  para crear un producto
// cuando por consola digamos "node app.js crear id name price descuento image" en id para crear introducir 0
let parametroFindId = process.argv[3];
// parametroFindId se in troduce el id a buscar

let parametroName = process.argv[4];
let parametroPrice = process.argv[5];
let parametroDescuento = process.argv[6];
let parametroImage = process.argv[7];
switch(accion) {
    case 'all':
        productModel.all();

        break;

    case 'find':
        console.log(productModel.find(parametroFindId))
        break;

    case 'create':
        let aux = {
          id : parametroFindId,
           name : parametroName,
           price : parametroPrice,
           descuento : parametroDescuento,      
           image : parametroImage
        }
        productModel.create(aux)
        break;

        case 'update':
           console.log("entre al updatesss")

           let aux1 = {
            id : parametroFindId,
             name : parametroName,
             price : parametroPrice,
             descuento : parametroDescuento,      
             image : parametroImage
          }
          productModel.update(aux1)
            break;
    
   

        

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: all, find, create, update');
        break;

}
