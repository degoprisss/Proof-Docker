/*const { Pool } = require('pg')


const proofQuery = async () => {
    try {
        const pool = new Pool({
            user: 'postgres',
            host:"postgresnnn",
            database: "postgres",
            password: "viviana14",
            port: 5432
        })
        
        await pool.connect()
        console.log('Estamos iniciando el servidor')
        let createTable = await pool.query('CREATE TABLE IF NOT EXISTS createYesExist (id serial, name varchar(30), lastname varchar(30))')
        let createUser = await pool.query("insert into createYesExist (name, lastname) values ('Humberto', 'Mesa Mesa')")
        console.log(createUser.rows)
        let result = await pool.query('select * from createYesExist')
        console.log(result.rows)
    } catch (error) {
        console.log(error)
    }
} 

module.exports = { proofQuery }

*/

