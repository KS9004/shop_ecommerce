const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true,'Please enter product name'],
        trim:true,
        maxLength:[100,'Product name cannot exceed 100 characters ']
    },
    price:{
        type: Number,
        required:[true,'Please enter product price'],
        trim:true,
        maxLength:[5,'Product name cannot exceed 5 characters '],
        default:0.0
    },
    description:{
        type: String,
        required:[true,'Please enter product description'],
    },
    ratings:{
        type: Number,
        default:0
    },
     images:[
         {
         public_id:{
             type: String,
             required:true
         },
         url:{
            type: String,
            required:true
        }
     }
    ],
    category:{
        type: String,
        required:[true,'Please select category for this product '],
        enum:{
            values:[
                'Electronics',
                'Cameras',
                'Laptop',
                'Accessories',
                'Headphones',
                'Food',
                'Clothes/Shoes',
                'Beauty/Healthy',
                'Sports',
                'Home',
            ],
            message: 'Please select correct category for this product'
        }
    },
    seller:{
        type: String,
        required:[true,'Please enter product seller']
    },
    stock:{
        type: Number,
        required:[true,'Please enter product stock'],
        maxLength:[5,'Product name cannot exceed 5 characters'],
        default: 0
    },
    numberOfReviews:{
        type: Number,
        default:0
    },
    review:[
        {
            name: {
                type: String,
                required:true
            },
            rating: {
                type: Number,
                required:true
            },
            comment:{
                type: String,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

    
})

module.exports = mongoose.model('Products',productSchema);