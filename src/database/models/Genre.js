module.exports = function(sequelize,DataTypes){
    const Genre = sequelize.define('Genre',{
        name:DataTypes.STRING
    },{'timestamps':false});

    Genre.associate = function (models){
        Genre.belongsToMany(models.Product, {
			as: "products",
			through: "genre_product",
			foreignKey: "genreId",
			otherKey: "productId"
		});
    }

    return Genre;
}