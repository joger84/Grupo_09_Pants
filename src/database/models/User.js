module.exports = function (sequelize, DataTypes) {
    let alias = "User";   //alias de nuestro modelo
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING
        },
        //todas las columnas que tiene nuestra tabla
    }
    let config= {
        tableName: "pantsAlone",
        timestamps: false
    }
    
    let Product = sequelize.define(alias, cols, config);
        return User;
}