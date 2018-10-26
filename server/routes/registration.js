const { ObjectID } = require("mongodb");

module.exports = function(app, db) {
    app.get("/register/:id", (req, res) => {
        const { id } = req.params;
        const details = { _id: new ObjectID(id) };

        db.collection("users").findOne(details, (err, item) => {
            if (err) {
                res.send({ error: "An error has occured" });
            } else {
                res.send(item);
            }
        });
    });

    app.delete("/register/:id", (req, res) => {
        const { id } = req.params;
        const details = { _id: new ObjectID(id) };

        db.collection("users").deleteOne(details, (err) => {
            if (err) {
                res.send({ error: "An error has occured" });
            } else {
                res.send(`User ${id} deleted`);
            }
        });
    });

    app.put("/register/:id", (req, res) => {
        const { id } = req.params;
        const details = { _id: new ObjectID(id) };
        const { email, password } = req.body;
        const user = {
            email,
            password
        };

        db.collection("users").updateOne(details, user, (err, item) => {
            if (err) {
                res.send({ error: "An error has occured" });
            } else {
                if (item.result.nModified) {
                    res.send("Successfully");
                } else {
                    res.send("User data were not updated");
                }
            }
        });
    });

    app.post("/register", (req, res) => {
        const { email, password } = req.body;
        const user = {
            email,
            password
        };

        db.collection("users").insertOne(user, (err, results) => {
            if (err) {
                res.send({ error: "An error has occured" });
            } else {
                res.send(results.ops[0]);
            }
        });
    });
};
