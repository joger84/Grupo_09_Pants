module.exports = function (sequelize, DataTypes) {
    let Product = sequelize.define('Product', {
        model:DataTypes.STRING,
        description:DataTypes.TEXT,
        quantity:DataTypes.INTEGER,
        price:DataTypes.INTEGER,
        discount:DataTypes.DECIMAL,
        image:DataTypes.STRING,
        deletedAt:DataTypes.DATE
        
    },{});

    Product.associate = function (models) {
		Product.belongsToMany(models.Color, {
			as: "colors",
			through: "colors_products",
			foreignKey: "productId",
			otherKey: "colorId"
		});
		Product.belongsToMany(models.Size, {
			as: "sizes",
			through: "size_products",
			foreignKey: "productId",
			otherKey: "sizeId"
		});
		Product.belongsToMany(models.Genre, {
			as: "genres",
			through: "genre_products",
			foreignKey: "productId",
			otherKey: "genreId"
		});
	}
    
    return Product;
}