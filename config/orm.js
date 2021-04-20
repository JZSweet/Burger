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
// 
/*
INSERT INTO burgers_db.burgers (burger_name, devoured)
VALUES ('Big JZ', TRUE);
*/
    insertOne: (table, object, cb) => {
        const sql = "INSERT INTO " + table + " (burger_name, devoured) VALUES (?,?)" 
        connection.query(
             sql,[object.burger_name,object.devoured],
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