import mongoose from "mongoose";
// creating a schema for data//
const blog_schema= mongoose.Schema({
    name:{type:String, require:true, trim:true},
    email:{type:String, require:true},
    phone:{type:Number, min:1000000000, max:9999999999},
    password:{type:String}
})

// creating a collection

const blog_modal=mongoose.model('client',blog_schema);
export default blog_modal;

