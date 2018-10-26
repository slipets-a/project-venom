const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");

const routes = require("./routes/index");
const db = require("./config/db");

const app = express();
const port = process.env.port || 8000;

app.set("port", port);
app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(
    db.url,
    {
        useNewUrlParser: true
    },
    (err, database) => {
        if (err) {
            return console.log(err);
        }
        routes(app, database.db(database.dbName));
        app.listen(port, () => {
            console.log(`
            Hello ${process.env.USER}.
            We are live on port ${port}
            `);
        });
    }
);
