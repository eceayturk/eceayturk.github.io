$(document).ready(function() {

    function fetchSpeakerData(file) {
      $.getJSON("json_data/" + file + ".json", function(data) {
        
        $(".dialog").empty();
  
        data.owners.forEach(function(speaker) {
          var title = $("<h1>").text(speaker.title);
          var image = $("<img>").attr("src", speaker.image);
          var month = $("<h2>").html(speaker.month + "<br>" + speaker.speaker);
          var description = $("<p>").text(speaker.text);
  
          $(".dialog").append(title, image, month, description);
        });
      });
    }
  
    $("#nav_list a").click(function(e) {
  
  
      var title = $(this).attr("title");
  
      fetchSpeakerData(title);
    });
  });
