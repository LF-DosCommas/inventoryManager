var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = (sequelize, DataTypes) => {
    var Items = sequelize.define(`Items`, {
        gender: Sequelize.STRING,
        style: Sequelize.STRING,
        size: Sequelize.STRING,

    
        
    });

    return Items;
};