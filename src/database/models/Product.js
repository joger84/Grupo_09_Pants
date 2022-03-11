module.exports = function (sequelize, DataTypes) {
    let Product = sequelize.define(alias, cols, config);
    
    let alias = "Product";   //alias de nuestro modelo
    
    let cols = {
        /*id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },*/
        size:{
            type: dataTypes.STRING
        },
        model: {
            type: dataTypes.STRING
        },
        description:{
            type: dataTypes.TEXT
        },
        quantity: {
            type: dataTypes.INTEGER
        },
        color:{
            type: dataTypes.STRING
        },
        genre:{
            type: dataTypes.STRING
        },
        price:{
            type: dataTypes.INTEGER
        },
        discount:{
            type: dataTypes.DECIMAL
        },
        image:{
            type: dataTypes.STRING
        },
        carated_at:{
            type: dataTypes.DATE
        },
        modified_at:{
            type: dataTypes.DATE
        },
        deleted_at:{
            type: dataTypes.DATE
        },
        color_products_id:{
            type: dataTypes.INTEGER
        }
    }
    
    let config= {
        tableName: "pantsAlone",
        
    }
    

Product.associate = function (models) {
    Product.hasMany(models.User,{     // .nombre de la tabla que tenemos que relacionar
        as: "",
        through: "", //nombre de la tabla pivot
        foreingKey: "",
        otherKey: "",
        
    }); 
        // hacer la misma asociacion en la otra tabla

}

        return Product;
}