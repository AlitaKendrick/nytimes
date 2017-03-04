// var searchTerm = $("#searchTerm").val();
// console.log(searchTerm);

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "a36f255f647b4ee88e1ae763e628f617",
  // 'q': 'dog'
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result.response.docs);
}).fail(function(err) {
  throw err;
});

$(".searchButton").on("click", function(event) {
	event.preventDefault();
	var searchTerm = $("#searchTerm").val();
	console.log(searchTerm);

	var resultDiv = $("<div class='search'>");
	var response = result.response.doc;

	var pResult = $("<p>").text(response.headline.main);
})

