const dotenv = (require("dotenv").config()).parsed

let config = {
    username: 'postgres',
    password: 'QXmiZsnxTiaBCvfxwxxnLBchMxrmlPeH',
    database: 'railway',
    host: 'roundhouse.proxy.rlwy.net',
    port: 28233,
    dialect: 'postgres',
    migrationStorageTableName: "sequelize_migrations",
    seederStorageTableName: "sequelize_seeds"
};

module.exports = {
    development: config,
    test: config,
    production: config
}