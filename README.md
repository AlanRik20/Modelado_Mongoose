# GRAFICO DE RELACIONES #
![Captura de grafico realizado que muestra el flujo de registros de los modelos](/img/Captura%20de%20pantalla%202024-10-09%20164014.png)

# CONTEXTO #
Un comercio de suministros de limpieza requiere que cada uno de sus empleados pueda registrar sus ventas de forma individual. Además, los empleados deben tener acceso a la aplicación utilizando credenciales.

# MODELOS REALIZADOS #

## 1: Modelo de empleado: ##
```js
import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    dateBirth: {
        type: Date,
        required: true,
    },

    DNI: {
        type: Number,
        required: true,
        unique: true
    },

    phoneNumber: { type: Number, required: true },

    socialSecurity: { type: Number, required: true },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Relación con la colección de usuarios
        required: [true, "El ID del usuario es obligatorio."],
    },

    sells_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sell", // Relación con la colección de usuarios
        required: true
    }



});

const employer = mongoose.model('employee', employeeSchema);

export default employer;
```
En este modelo se registran los datos personales de los empleados, tales como:
* Nombre
* Fecha de nacimiento
* DNI
* Número de teléfono
* Número de seguro social
* userId: referencia a la colección ``Users``, relaciona el empleado con su cuenta de usuario.
* sellId: refencia a la colección ``Sells``, relaciona la cantidad de ventas que realizó el empleado.

## 2: Modelo de Ventas ##
```js
import mongoose from 'mongoose';

const sellSchema = new mongoose.Schema({
    dateSell: {
        type: Date,
        required:true
    },

    total_amount:{
        type: Number,
        required:true
    },

    unit_amount: {
        type:Number,
        required: true
    },

    total_sale: {
        type:Number,
        required: true
    },

    employeeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "employer", // Relación con la colección de usuarios
        required:true,
    },

    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product", // Relación con la colección de usuarios
        required: [true, "No se encontró ningún producto con ese id."],
    },
    

});

const Sales = mongoose.model('sell', sellSchema);

export default Sales;
```
En este modelo de ventas se registran todas las ventas realizadas por el negocio:
* precio de la venta
* cantidad vendida
* employeeId: referencia al modelo ``empleado``, es el empleado encargado de la venta
* productId: referencia al modelo ``productos``, relacionando el producto que se vendió


## 3: Modelo de Usuarios ##
```js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String, required: true},
    email:{type:String, required:true },
    password:{type:Number, required:true}
})

const User = mongoose.model('Users', userSchema);

export default User
```
En el modelo de Usuarios es en donde se registra el empleado al momento de ingresar al sistema, ingresando su nombre de usuario, correo y contraseña.

## 4: Modelo de Productos ##
```js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true, unique: true },
    cant_product: {type: Number, required:true},
    dateExpire:{type:Date, required:true},
    price: {type: Number, required:true },
    
});

const product = mongoose.model('Proudcts', productSchema);

export default product;
```
En el modelo de productos se registran los productos que tiene el local, el nombre y la cantidad del mismo, la fecha de vencimiento, el precio y una descripción

## Relaciones entre los Modelos: ##
**Employee -> User**: Un empleado está vinculado a un usuario a través del campo userId. Esto permite que cada empleado tenga su propio perfil de usuario con credenciales para acceder al sistema.

**Sell -> Employee**: Cada venta registrada en el sistema está relacionada con un empleado a través del campo employeeId, lo que permite identificar quién realizó la venta.

**Sell -> Product**: Cada venta también está asociada con un producto a través del campo productId, lo que permite rastrear qué productos fueron vendidos y en qué cantidad.
