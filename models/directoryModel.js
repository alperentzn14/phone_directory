module.exports = (sequelize, DataTypes) => {

    const Directory = sequelize.define("directory", {

        directory_name: {
            type: DataTypes.TEXT,
        },
        directory_Surname: {
            type: DataTypes.TEXT
        },
        directory_phone_number: {
            type: DataTypes.TEXT
        }
    
    })

    return Directory

}