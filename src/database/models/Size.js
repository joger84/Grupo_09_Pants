module.exports = function (sequelize, DataTypes) {
    let Size = sequelize.define('Size', {
        name:DataTypes.STRING
    },{'timestamps':false});

    Size.associate = function (models) {
		Size.belongsToMany(models.Product, {
			as: "products",
			through: "size_product",
			foreignKey: "sizeId",
			otherKey: "productId"
		});
	}
    
    return Size;
}