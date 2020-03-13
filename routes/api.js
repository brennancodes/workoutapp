let db = require("../models");


module.exports = (app) => {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(results => {
                // console.log(results);
                res.json(results);
            });
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
            .then(results => {
                // console.log("Insterted to db", body, "results =", results);
                res.json(results);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        const id = req.params.id;
        const exercise = req.body;

        db.Workout.findOneAndUpdate({ _id: id }, { $push: { exercises: exercise } })
            .then(results => {
                res.json(results);
            })
            .catch(err => { 
                console.log(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(results => {
                // console.log(results);
                res.json(results);
            });
    });
};