const Github = require('./../js/github.js').githubModule;
const queryString = require('query-string');
var github = new Github();

$(document).ready(function() {
  var search = queryString.parse(location.search).name;
  if(search) {
    $('#name').val(search);
    github.search(search);
  }
});
