const mysql = require('mysql2');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Kabi@2005',
    database : 'clouddemo1'
});
                                                                                                           
connection.connect((err)=>{
    if(err){
        console.error('Error connecting to database.', err.message);
        return;
    }else{
        console.log('Connected to database.');
    }
});
module.exports = connection;