module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'alperen1',
    DB: 'phoneapp',
    dialect: 'mysql',

    pool: {
        max: 1,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}