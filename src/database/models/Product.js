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
			through: "color_product",
			foreignKey: "productId",
			otherKey: "colorId"
		});
		Product.belongsToMany(models.Size, {
			as: "sizes",
			through: "size_product",
			foreignKey: "productId",
			otherKey: "sizeId"
		});
		Product.belongsToMany(models.Genre, {
			as: "genres",
			through: "genre_product",
			foreignKey: "productId",
			otherKey: "genreId"
		});
		Product.associate = function (models) {
			Product.belongsToMany(models.User, {
				as: "products",
				through: "user_product",
				foreignKey: "productId",
				otherKey: "userId"
			});
		}
		// falta asociacion con tabla shop
	}
    return Product;
}