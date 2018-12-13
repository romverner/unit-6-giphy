// Array of video game titles to be queried in GIPHY API
var topics = ["Castlevania Symphony of the Night", "Skyrim", "Mirrors Edge", "Call of Duty 4"];

// Function that renders buttons onto screen
function renderButtons() {
    for (i = 0; i < topics.length; i++) {

        var b = $("<button>");
        b.text(topics[i]);
        b.addClass("btn btn-secondary gif-button mt-2 mb-2 mr-1 ml-1");
        b.attr('data', topics[i]);
        b.attr('value', i);
        $("#buttons").append(b);

        console.log("Added buttons!");
    };
};

// Waits for HTML to load before running script
$(document).ready(function () {
    
    // Initial render of buttons
    renderButtons();

    $(".gif-button").on("click", function () {
        // event.preventDefault();

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=";
        queryURL += $(this).attr('data').trim();
        queryURL += "&api_key=IkkWjxhZzjCB0hbJgT2DD9h3atLYPtKP&limit=10";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
                console.log(response);







                
            });
    });
});