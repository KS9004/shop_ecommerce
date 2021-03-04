const Product = require('../models/productModel');

// Create new product

exports.newProduct = async (req, res, next) => {
 
  const product = await Product.create(req.body);

  res.status(200).json({
    success:true,
    product
  });

  
}

// Get all products
exports.getProducts = async (req,res,next)=>{

  const products = await Product.find();
  res.status(200).json({
      success:true,
      count:products.length,
      products
  })
}

// Get the Single Product by its ID
exports.getSingleProduct = async (req, res, next)=>{
 const product = await Product.findById(req.params.id);

 if(!product){
   res.status(404).json({
     success:false,
     message: 'Product not found'
   })
 }


 res.status(200).json({
   success:true,
   product
 })

}
// Update product
exports.updateProduct = async (req, res, next)=>{
  let product = await Product.findById(req.params.id);

  if(!product){
    res.status(404).json({
      success:false,
      message: 'Product not found'
    })
  }

   product = await Product.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true,
      useFindAndModify:false
  });

  res.status(200).json({
    success:true,
    product
  })
}

// Delete product

exports.deleteProduct =async (req, res) => {
  let product = await Product.findById(req.params.id);

  if(!product){
    res.status(404).json({
      success:false,
      message: 'Product not found'
    })
  }

  await Product.remove();

  res.status(200).json({
    success:true,
    message:'Product deleted'
  })

}