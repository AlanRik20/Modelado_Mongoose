import mongoose from 'mongoose';

const sellSchema = new mongoose.Schema({
    dateSell: {
        type: Date,
        required:true
    },

    amount:{
        type: Number,
        required:true
    },

    units: {
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
