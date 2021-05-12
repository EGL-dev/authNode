
import Product from '../models/Product'

export const createProduct= async (req,res)=>{
    const{name,category,price,imgURL} = req.body;
    const newProduct = new Product({name,category,price,imgURL});

    const productSave = await newProduct.save();


    res.json(productSave);

    





    res.json('Creating product');
}
export const getProducts= async(req,res)=>{
    const products = await Product.find();
    res.json(products);


    res.json('get products');
}

export const getProductById=  async(req,res)=>{

    const product = await Product.findById(req.params.productId);
    res.statues(200).json(product);

    
}
export const updateProductById= async(req,res)=>{
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new:true
    })

    res.status(204).json(updatedProduct);
    


}
export const deleteProductById= async(req,res)=>{
    const deleteProduct = await Product.findByIdAndDelete(req.params.productId);
    res.status(204).json();
}