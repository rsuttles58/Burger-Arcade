var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

      //do I need to build these as functions or should I be following the logic above from the cats exercise?  
    selectAll(),

    insertOne();
    
    updateOne();

}


module.exports