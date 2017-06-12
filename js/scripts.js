function Destination(location, landmark, year, notes) {
  this.location = location;
  this.landmark = landmark;
  this.year = year;
  this.notes = notes;
}

$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#location").val();
    var inputtedLandmark = $("input#landmark").val();
    var inputtedYear = $("input#year").val();
    var inputtedNotes = $("input#notes").val();

    var newDestination = new Destination(inputtedLocation, inputtedLandmark, inputtedYear, inputtedNotes);

    $("ul#locations").append("<li><span class='contact'>" + newDestination.location + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newDestination.location);
      $(".location").text(newDestination.location);
      $(".landmark").text(newDestination.landmark);
      $(".year").text(newDestination.year);
      $(".notes").text(newDestination.notes);

    });

  });
});
