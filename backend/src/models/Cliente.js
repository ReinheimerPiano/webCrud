const sequelize = require('./sequilize');

module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        Nome: DataTypes.STRING(250),
        Email: DataTypes.STRING(250),
        Data_Nascimento: DataTypes.STRING,
        CPF: DataTypes.STRING(11),
        Logradouro: DataTypes.STRING(250),
        Numero: DataTypes.INTEGER,
    }, {
        timestamps: false
    });

    return Cliente;
}