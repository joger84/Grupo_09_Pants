module.exports = function (sequelize, DataTypes) {
    let Shop = sequelize.define('Shop', {
        name:DataTypes.STRING,
        

        
    },{timestamps:false});

    /*Shop.associate = function (models) {
		Shop.belongsToMany(models.user, {
			as: "users",
			through: "user_shop",
			foreignKey: "shopId",
			otherKey: "userId"
		});
	// falta asociacion con tabla productos
	}
    */
    return Shop;
}