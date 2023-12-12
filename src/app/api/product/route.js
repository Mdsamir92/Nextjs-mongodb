import mongoose from "mongoose";
import {connectionStp } from "@/lib/db";
import { Products } from "@/lib/model/product";
import { NextResponse } from "next/server";


export async function POST(req){
    const payload = await req.json();
    await mongoose.connect(connectionStp);
    let product = new Products(payload);
    const result = await product.save();
    return NextResponse.json({result,success:true})
   
}





