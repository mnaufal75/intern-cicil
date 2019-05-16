$("#fetchData").click(function() {
  $.ajax({
    url: "http://www.mocky.io/v2/5c7cf10c1000002c15760d04",
    type: "GET",
  })
    .done(function (data) {
      $("#data").text(data.content);
    })
});
