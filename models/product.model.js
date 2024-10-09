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
