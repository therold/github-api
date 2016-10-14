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
    result.items.forEach(function(item, i) {
      var userInfo = `
        <div class="userInfo">
          <img src=${item.avatar_url} class="pull-right avatarImg"></img>
          <p>${item.login}</p>
          <div class="userDetails user${i}">
            <h3 class='loadingUserDetails text-center'>Loading...</h3>
          </div>
          <hr>
        </div>`;
      $('.results').append(userInfo);
      $('.userInfo').last().click(function() {
        $('.userDetailsData').remove();
        $(this).find('.loadingUserDetails').show();
        github.user(item.login, i, displayUserDetails, displayUserDetailsError);
      });
    });
  }
};

displaySearchError = function(error) {
  $('.loading').hide();
  var errorInfo = `<p>Error: ${error}</p>`;
  $('.results').append(errorInfo);
};


displayUserDetails = function(user, n) {
  $('.loadingUserDetails').hide();
  console.log(user);
  var userDetails = `
    <div class="userDetailsData">
      <p>Followers: ${user.followers}</p>
    </div>`;
  $(`.user${n}`).append(userDetails);
};

displayUserDetailsError = function(error, n) {
  $(`.user${n}`).append(`<h3>Error: ${error}</h3>`);
};
