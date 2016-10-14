const Github = require('./../js/github.js').githubModule;
const queryString = require('query-string');
var github = new Github();

$(document).ready(function() {
  var search = queryString.parse(location.search).name;
  if(search) {
    $('#name').val(search);
    github.search(search, displaySearchResults, displaySearchError);
  }
});


displaySearchResults = function(results) {
  console.log(results);
};

displaySearchError = function(error) {
  console.log(error);
};
