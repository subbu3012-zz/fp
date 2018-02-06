var mysql = require('mysql');

function getConnection() {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'fpuser',
        password: 'fpuser',
        database: 'fpdb',
        port: '6036'
    });
}

module.exports = {

    testController: function (req, res) {
        console.log('testController has been invoked...');
        var connection = getConnection();
        try {
            connection.connect();
            connection.query('SELECT * from customers', function (error, results, fields) {
                if (error) throw error;
                return res.json(results);
            });
        } catch (error) {
            throw error;
        } finally {
            connection.end();
            console.log('called')
        }
    },

    postTestController: function (req, res) {
        console.log('postTestController has been invoked...');
        return res.json({ data: 'Successfully into postTestController' });
    }
}