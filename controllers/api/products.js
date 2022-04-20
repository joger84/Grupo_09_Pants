const { Op } = require("sequelize");
const {Product,Color,Size,Genre} = require("../../src/database/models")

module.exports = {
    show: async(req,res) => {
        const products = await Product.findAll()
        
        console.log(products)
        
        return res.json({
			total: products.length,
            products
			
		})
    }
}