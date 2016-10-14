const Github = require('./../js/github.js').githubModule;
const queryString = require('query-string');
var github = new Github();

$(document).ready(function() {
  if(document.location.pathname === "/index.html") {
    var search = queryString.parse(location.search).name;
    if(search) {
      $('.loading').show();
      $('#name').val(search);
      github.search(search, displaySearchResults, displaySearchError);
    }
  }
  if(document.location.pathname === "/user.html") {
    var user = queryString.parse(location.search).user;
    if(user) {
      $('.loading').show();
      $('title').text(user);
      // github.user(user, displayUserResults, displayUserError);
    }
  }
});
