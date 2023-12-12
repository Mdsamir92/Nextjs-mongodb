import mongoose from "mongoose";

const productModel =  new mongoose.Schema({

    customerName:String,
    age:String,
    placeFrom:String,
    placeTo:String,
    class:String,
    seat:String,
    passenger:String,
   
   
});
export const Products = mongoose.models.datas || mongoose.model("datas",productModel)