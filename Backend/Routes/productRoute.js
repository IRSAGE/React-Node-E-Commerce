import express from 'express';
import Product from '../Models/productModel';
import { isAuth, isAdmin } from '../util';



const router = express.Router();

router.get("/",async (req,res) =>{
    const products =await Product.find({});
    res.send(products);
});

router.post("/",isAuth,isAdmin,async(req,res)=>{
    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.body.image,
        brand:req.body.brand,
        category:req.body.category,
        countInStock:req.body.countInStock,
        description:req.body.description,
        rating:req.body.rating,
        numReviews:req.body.numReviews
    });
const newProduct = await product.save();
if (newProduct) {
   return res.status(201).send({message:'new Product Is Created',date: newProduct});
}
return res.status(500).send({message:'Error In Creating A product'});
})

export default router;