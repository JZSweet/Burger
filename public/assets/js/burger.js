// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//     $(".change-sleep").on("click", function(event) {
//       var id = $(this).data("id");
//       var newSleep = $(this).data("newsleep");
  
//       var newSleepState = {
//         sleepy: newSleep
//       };
  
//       // Send the PUT request.
//       $.ajax("/api/cats/" + id, {
//         type: "PUT",
//         data: newSleepState
//       }).then(
//         function() {
//           console.log("changed sleep to", newSleep);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
      console.log("click")
      // Make sure to preventDefault on a submit event.

      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: $("[name=Devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created newBurger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  // });
  