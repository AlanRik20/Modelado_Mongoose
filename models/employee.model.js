import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    dateBirth: {
        type: String,
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

    sellId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sell", // Relación con la colección de usuarios
        required: true
    }



});

const employer = mongoose.model('employee', employeeSchema);

export default employer;


