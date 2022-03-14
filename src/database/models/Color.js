module.exports = function (sequelize, DataTypes) {
    let Color = sequelize.define('Color', {
        name:DataTypes.STRING
    },{'timestamps':false});

    Color.associate = function (models) {
		Color.belongsToMany(models.Product, {
			as: "products",
			through: "colors_products",
			foreignKey: "colorId",
			otherKey: "productId"
		});
	}
    
    return Color;
}