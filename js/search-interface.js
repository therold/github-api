displaySearchResults = function(result) {
  console.log(result);
  $('.loading').hide();
  if(result.items.length === 0) {
    var resultInfo = "<h3>No results found.</h3>";
    $('.results').append(resultInfo);
  } else {
    result.items.forEach(function(item, i) {
      var userInfo = parseUser(item, i);
      $('.results').append(userInfo);
      $('.userInfo').last().click(function() {
        loadSearchDetails(item.login, i);
      });
    });
  }
};

parseUser = function(user, n) {
  var userInfo = `
    <div class="userInfo">
      <img src=${user.avatar_url} class="pull-right avatarImg"></img>
      <p>${user.login}</p>
      <div class="userDetails user${n}">
        <h3 class='loadingUserDetails text-center'>Loading...</h3>
      </div>
      <hr>
    </div>`;
  return userInfo;
};

loadSearchDetails = function(user, n) {
  $('.userDetailsData').remove();
  $(`user${n}`).find('.loadingUserDetails').show();
  github.user(user, n, displaySearchDetails, displaySearchDetailsError);
};

displaySearchError = function(error) {
  $('.loading').hide();
  var errorInfo = `<p>Error: ${error}</p>`;
  $('.results').append(errorInfo);
};

displaySearchDetails = function(user, n) {
  $('.loadingUserDetails').hide();
  console.log(user);
  var userDetails = `
    <div class="userDetailsData">
      <p>Followers: ${user.followers}</p>
    </div>`;
  $(`.user${n}`).append(userDetails);
};

displaySearchDetailsError = function(error, n) {
  $(`.user${n}`).append(`<h3>Error: ${error}</h3>`);
};
