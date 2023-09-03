const Pool= require("pg").Pool;

// const pool = new Pool({
//     user:"postgres",
//     password: "Raciton23@T1",
//     host: "localhost",
//     port: 5432,
//     database: "perntodo"
// })

const pool = new Pool({
    user:"sldknrytfxwyih",
    password: "86f92a8cbff03133dc96211e43c16924048b26484ffead1f05a9a9295838d8aa",
    host: "ec2-99-80-190-165.eu-west-1.compute.amazonaws.com",
    port: 5432,
    database: "db627u6nhdn9nm"
})

module.exports = pool;