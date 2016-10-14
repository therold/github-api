displaySearchResults = function(result) {
  // console.log(result);
  $('.loading').hide();
  if(result.items.length === 0) {
    var resultInfo = "<h3>No results found.</h3>";
    $('.results').append(resultInfo);
  } else {
    result.items.forEach(function(item, i) {
      var userInfo = parseUser(item, i);
      $('.results').append(userInfo);
      $('.userInfo').last().click(function() {
        if($(`.user${i} .userDetailsData`).length === 0){
          loadSearchDetails(item.login, i);
          $('.glyphicon-triangle-bottom').addClass('glyphicon-triangle-right').removeClass('glyphicon-triangle-bottom');
          $(`.user${i} .expander`).removeClass('glyphicon-triangle-right');
          $(`.user${i} .expander`).addClass('glyphicon-triangle-bottom');
        } else {
          $(`.user${i} .expander`).removeClass('glyphicon-triangle-bottom');
          $(`.user${i} .expander`).addClass('glyphicon-triangle-right');
          $(`.user${i} .userDetailsData`).remove();
        }
      });
    });
  }
};

parseUser = function(user, n) {
  var userInfo = `
    <div class="userInfo user${n}">
      <img src=${user.avatar_url} class="pull-right avatarImg"></img>
      <p><span class="expander glyphicon glyphicon-triangle-right"></span><strong>${user.login}</strong</p>
      <div class="userDetails">
        <h3 class='loadingUserDetails text-center'>Loading...</h3>
      </div>
      <hr>
    </div>`;
  return userInfo;
};

loadSearchDetails = function(user, n) {
  $('.userDetailsData').remove();
  $(`.user${n}`).find('.loadingUserDetails').show();
  github.user(user, n, displaySearchDetails, displaySearchDetailsError);
};

displaySearchError = function(error) {
  $('.loading').hide();
  var errorInfo = `<p>Error: ${error}</p>`;
  $('.results').append(errorInfo);
};

displaySearchDetails = function(user, n) {
  $('.loadingUserDetails').hide();
  // console.log(user);
  var userDetails = parseUserDetails(user);
  $(`.user${n}`).append(userDetails);
};

parseUserDetails = function(user) {
  var userDetails = `
    <div class="userDetailsData">
      <div class="row">
        <div class="col-xs-4">
          <p>Repositories: ${user.public_repos}</p>
        </div>
        <div class="col-xs-4">
          <p>Followers: ${user.followers}</p>
        </div>
        <div class="col-xs-4">
          <p>Following: ${user.following}</p>
        </div>
      </div>
      <div class="row text-center">
        <strong><a href="/user.html?user=${user.login}" class="text-center">View full user info.</a></strong>
      </div>
    </div>`;
  return userDetails;
};

displaySearchDetailsError = function(error, n) {
  $(`.user${n}`).append(`<h3>Error: ${error}</h3>`);
};
