$(document).ready(function() {

    function fetchSpeakerData(file) {
        $.getJSON("json_data/" + file + ".json", function(data) {
            var speaker = data.owners[0]; // assuming the JSON structure has an array named 'owners'
            $("#title").text(speaker.title);
            $("#image").attr("src", speaker.image);
            $("#month").html(speaker.month + "<br>" + speaker.speaker);
            $("#description").text(speaker.text);
        });
    }

    $("#nav_list a").click(function(e) {
        e.preventDefault(); // Prevent default link behavior
        var title = $(this).attr("title");
        fetchSpeakerData(title);
    });
});
