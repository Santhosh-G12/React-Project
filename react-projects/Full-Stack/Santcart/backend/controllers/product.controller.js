import Product from "../models/products.model.js";
import mongoose from "mongoose";

export const getProduct =async (req, res) => {
    try{
        const allProducts = await Product.find({})
        res.status(200).json({success:true,data:allProducts})
    }catch(error){
        console.log("error message",error.message)
        res.status(500).json({success:false,message:"Error in fetching all products"})
    }
    
}

export const addProduct =async (req,res)=>{
    const product = req.body;


    if(!product.name||!product.price||!product.image){
        return res.status(400).json({success:false,message:"Please provide all fileds"})
    }
    const newProduct = new Product(product)
    try{
        await newProduct.save()
        res.status(201).json({success:true,data:newProduct})
    }catch(error){
        console.error("Error in Creating Product",error.message);
        res.status(500).json({success:false,message:"Server Error"})
    }
}

export const deteleProduct =async (req,res)=>{
    const {id} = req.params
    res.send(id)
    try{
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"Product Deleted"})
    }catch(error){
        res.status(404).json({success:false,message:"product not found"})
    }

}
export const updatedProduct = async(req,res)=>{
    const {id} = req.params
    const product = req.body

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new :true})
        res.status(200).json({success:true,message:"Product Updated",data:updatedProduct})
    }catch(error){
        res.status(500).json({success:false,message:"Invalid Product"})
    }
}
