
$(".change").on("click", function (event) {
  event.preventDefault();
  
  const id = $(this).attr("id");
  const newStatus = $(this).attr("data-devoured");
  console.log("burger", id, newStatus)

  var newState = {
    devoured: newStatus
  };

  $.ajax("/api/burgers", {
    type: "put",
    data: newState
  }).then(
    function () {
      location.reload();
      console.log("change state", newStatus)
    }
  );
});


$(".create-form").on("submit", function (event) {
  event.preventDefault();
  console.log("click")

  var newBurger = {
    burger_name: $("#burger").val().trim(),
    devoured: $("[name=Devoured]:checked").val().trim()
  };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function () {
      console.log("created newBurger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});
  // });
