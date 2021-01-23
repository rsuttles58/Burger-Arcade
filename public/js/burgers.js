$(function() {
    //jQuery block that literally reads "When the change.devoured ID is clicked, set id equal to the ID of the button
    //clicked and set newDevoured equal to the data value of newdevoured."
    $(".change-devoured").on("click", event => {
      const id = $(this).data("id");
      const newDevoured = $(this).data("newdevoured");
  
      const newDevouredState = {
        devoured: newDevoured
      };

      //ajax route called to update the state of newDevoured for the clicked burger button based on the ID.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
      //Once completed, then it will log newDevoured to the console and reload.
        () => {
          console.log("changed devoured to", newDevoured);
          location.reload();
        }
      );
    });
  
    //"When the create burger button is submitted, it will create a new burger based on the value entered."
    $(".create-burger").on("submit", event => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#name").val().trim(),
        devoured: "0"
      };
  
      //Post route updates the database with the new burger value 
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        () => {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });
  