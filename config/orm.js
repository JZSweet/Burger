// Import MySQL connection.
var connection = require("../config/connection.js");
const burger = require("../models/burger.js");

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
        const sql = "INSERT INTO " + table + " (burger_name, devoured) VALUES (?,?)"
        connection.query(
            sql, [object.burger_name, object.devoured],
            (err, res) => {
                if (err) throw err;
                cb(res);
            },
        );
    },

    updateOne: (table, objColVals, condition, cb) => {
        console.log("aspf",table, objColVals, condition)
        // var queryString = "UPDATE" + table;

        // queryString += " SET ";
        // // queryString += objToSql(objColVals);
        // queryString += " WHERE ";
        // queryString += condition;

        var queryString = `UPDATE burgers SET devoured=${objColVals.devoured !== "1"} Where id=${condition};`

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;