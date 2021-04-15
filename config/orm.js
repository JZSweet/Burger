// Import MySQL connection.
var connection = require("../config/connection.js");

const orm = {
    selectAll: (tableInput, cb) => {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: (table, object, cb) => {
        connection.query(
            "INSERT INTO " + table, object,
            (err, res) => {
                if (err) throw err;
                cb(res);
            },
        );
    },

    updateOne: (table, object, condition, cb) => {
        var queryString = "UPDATE" + table + "SET devoured" + "WHERE id =" + condition;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;