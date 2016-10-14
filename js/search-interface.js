displaySearchResults = function(result) {
  console.log(result);
  $('.loading').hide();
  if(result.items.length === 0) {
    var resultInfo = "<h3>No results found.</h3>";
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
        github.user(item.login, i, displaySearchDetails, displaySearchDetailsError);
      });
    });
  }
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
