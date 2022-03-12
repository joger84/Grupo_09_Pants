module.exports = function (sequelize, DataTypes) {
    let Product = sequelize.define('Product', {
        size:DataTypes.STRING,
        model:DataTypes.STRING,
        description:DataTypes.TEXT,
        quantity:DataTypes.INTEGER,
        color:DataTypes.STRING,
        genre:DataTypes.STRING,
        price:DataTypes.INTEGER,
        discount:DataTypes.DECIMAL,
        image:DataTypes.STRING,
        deletedAt:DataTypes.DATE
        
    },{timestamps:false});
    
    return Product;
}