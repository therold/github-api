const Github = require('./../js/github.js').githubModule;
const queryString = require('query-string');
var github = new Github();

$(document).ready(function() {
  if(document.location.pathname === "/index.html") {
    var search = queryString.parse(location.search).name;
    if(search) {
      $('.loading, .banner-sm').show();
      $('.banner').hide();
      $('#name').val(search);
      github.search(search, displaySearchResults, displaySearchError);
    } else {
      $('.banner').show();
    }
  }
  if(document.location.pathname === "/user.html") {
    var user = queryString.parse(location.search).user;
    $('.banner-sm').show();
    if(user) {
      $('.loading').show();
      $('.mainContent').hide();
      $('title').text(user);
      github.user(user, 0, displayUserResults, displayUserError);
    }
  }
});
