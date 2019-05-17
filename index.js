$("#requestButton").click(function() {
  $.ajax({
    url: "http://www.mocky.io/v2/5c7cf10c1000002c15760d04",
    type: "GET",
  })
    .done(function (data) {
      $("#responseText").text(data.content);
    })
});
