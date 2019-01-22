


//back end logic:


$(document).ready(function() {
  $("#firstForm").submit(function(event) {
    event.preventDefault();

    var userInputArray = $("input#groceryList").val();
    var splitUserInput = userInputArray.split(" ");
    var sortUserInput = splitUserInput.sort();

    sortUserInput.forEach(function(abc) {
      	var capUserInput = abc.charAt(0).toUpperCase() + abc.slice(1);
        console.log(capUserInput);
        $("#userList").append("<li>"+capUserInput+"</li>")

    });

    $("#userList").show();

  });


});
