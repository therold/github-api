const Github = require('./../js/github.js').githubModule;
const queryString = require('query-string');
var github = new Github();

$(document).ready(function() {
  var search = queryString.parse(location.search).name;
  if(search) {
    $('.loading').show();
    $('#name').val(search);
    github.search(search, displaySearchResults, displaySearchError);
  }
});


displaySearchResults = function(result) {
  console.log(result);
  $('.loading').hide();
  if(result.items.length === 0) {
    var resultInfo = "<h3>No results found.";
    $('.results').append(resultInfo);
  } else {
    result.items.forEach(function(item) {
      var userInfo = `
        <div class="userInfo">
          <img src=${item.avatar_url} class="pull-right avatarImg"></img>
          <p>${item.login}</p>
          <hr>
        </div>`;
      $('.results').append(userInfo);
    });
  }
};

displaySearchError = function(error) {
  $('.loading').hide();
  var errorInfo = `<p>Error: ${error}</p>`;
  $('.results').append(errorInfo);
};
