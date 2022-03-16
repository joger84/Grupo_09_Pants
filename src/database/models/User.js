module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define('User', {
        fullName:DataTypes.STRING,
        userName:DataTypes.STRING,
        eMail:DataTypes.STRING,
        password:DataTypes.STRING,
        genre:DataTypes.STRING,
        dateBirth:DataTypes.DATE,
        country:DataTypes.STRING,
        address:DataTypes.STRING,
        role:DataTypes.STRING,
        image:DataTypes.STRING,
        deletedAt:DataTypes.DATE

        
    },{timestamps:false});

    User.associate = function (models) {
		User.belongsToMany(models.Product, {
			as: "products",
			through: "user_product",
			foreignKey: "userId",
			otherKey: "productId"
		});
	
	}
    
    return User;
}