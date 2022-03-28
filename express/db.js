const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "t3k9ru4J",
    host: "localhost",
    port: 5432,
    database: "social_network"
}) //с помошью pool будем делать запросы к bd

module.exports = pool