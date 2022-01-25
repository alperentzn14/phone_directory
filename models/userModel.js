module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {

        Name: {
            type: DataTypes.TEXT
        },
        Surname: {
            type: DataTypes.TEXT
        },
        Company: {
            type: DataTypes.TEXT
        },
        Phone_Number: {
            type: DataTypes.TEXT
        }
    
    })

    return User

}