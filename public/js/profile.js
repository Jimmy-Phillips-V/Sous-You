
$(document).on("click", ".user-map", getMap);


function getMap() {
    var listItemData = $(this).parent("td").parent("tr").data("author");
    var id = listItemData.id;
    $.ajax({
      method: "GET",
      url: "/api/userzip/" + id
    })
      .then (function() {
      places(currentUser.zipcode)
    });
  }
  