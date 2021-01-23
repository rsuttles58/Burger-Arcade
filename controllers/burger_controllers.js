const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//routing page. Burger model, router, and express imported.
//Get route
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    const burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

//Post route to create a new burger with properties of name and boolean "devoured"
router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ],(result) =>{
    res.json({ id: result.insertId });
  });
});

//Put route that updates the burger based on the ID that is passed to the route.
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  //ORM call that will actually update the burger database.
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, result => {
    const changedRows = result.changedRows;
    if (changedRows) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;