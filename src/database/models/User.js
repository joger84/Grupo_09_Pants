module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define('User', {
        fullName:DataTypes.STRING,
        user:DataTypes.STRING,
        eMail:DataTypes.STRING, //unique
        password:DataTypes.STRING,
        genre:DataTypes.STRING,
        dateBirth:DataTypes.DATE,
        country:DataTypes.STRING,
        address:DataTypes.STRING,
        role:DataTypes.STRING, //revisar este dato debe ser por defecto = 0
        image:DataTypes.STRING,
        deletedAt:DataTypes.DATE

        
    },{});
/*
    User.associate = function (models) {
		User.hasMany(models.shop, {
			as: "shops",
			through: "user_shop",
			foreignKey: "userId",
			otherKey: "shopId"
		});
        
	}
    */
    return User;
}