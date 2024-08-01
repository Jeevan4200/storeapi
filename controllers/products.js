const Product = require('../models/product')
const getAllProductsStatic = async (req,res)=>{
    const products = await Product.find({featured:true})
    res.status(200).json({products})
}
const getAllProducts= async (req,res)=>{
    const {featured,company} = req.query
    const queryobject = {}
    if (featured){
        queryobject.featured = featured==='true'?true:false
    }
    if(company){
        queryobject.company = company
    }
    const products = await Product.find(queryobject)
    res.status(200).json({products})
}
module.exports = {
    getAllProducts,
    getAllProductsStatic
}