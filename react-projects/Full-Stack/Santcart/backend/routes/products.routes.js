import express from "express";
import Product from '../models/products.model.js'
import { addProduct, deteleProduct, getProduct, updatedProduct } from "../controllers/product.controller.js";

const router = express.Router()

//ADD Product API
router.post("/",addProduct)

//Delete API
router.delete("/:id",deteleProduct)

//GET ALL PRODUCTS
router.get("/",getProduct);


//UPDATE A PRODUCT
router.put("/:id",updatedProduct)

export default router;