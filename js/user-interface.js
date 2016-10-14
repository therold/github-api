displayUserResults = function(user, n) {
  console.log(user);
  $('.loading').hide();
  $('.mainContent').show();
  $('.userImg').append(`<img src="${user.avatar_url}"></img>`);
  if (user.name) {
    $('.userName').text(user.name);
  } else {
    $('.userName').text("Unknown");
  }
  $('.userLogin').text(user.login);
  $('.followers').text(user.followers);
  $('.following').text(user.following);
  if (user.blog) {
    $('.blog').append(`<a href=${user.blog}>${user.blog}</a>`);
  } else {
    $('.blog').text("Unknown");
  }
  if (user.email) {
    $('.email').text(user.email);
  } else {
    $('.email').text("Unknown");
  }
  if (user.company) {
    $('.company').text(user.company);
  } else {
    $('.company').text("Unknown");
  }
  $('.github').append(`<a href=${user.html_url}>${user.html_url}</a>`);
  $('.repoCount').text(`${user.public_repos}`);

  $('.repos .header').click(function() {
    if($('.repos .repoDetailsData').length === 0) {
      github.repos(user.login, displayRepos, displayReposError);
    } else {
      $('.repos .repoDetailsData').remove();
      $('.expander').removeClass('glyphicon-triangle-bottom');
      $('.expander').addClass('glyphicon-triangle-right');
    }
  });
};

displayUserError = function(error) {
  $('.loading').hide();
  $('.user').append(`<h3>Error: ${error}</h3>`);
};

displayRepos = function(repos) {
  console.log(repos);
  $('.expander').removeClass('glyphicon-triangle-right');
  $('.expander').addClass('glyphicon-triangle-bottom');
  repos.forEach(function(repo) {
    var repoInfo = parseRepo(repo);
    $('.repoDetails').append(repoInfo);
  });
};

parseRepo = function(repo) {
  var description;
  if(repo.description) {
    description = repo.description;
  } else {
    description = "Unknown";
  }

  var repoInfo = `
  <div class="repoDetailsData">
    <p>${repo.name}</p>
    <p>Description: <em>${description}</p>
    <hr>
  </div>`;
  return repoInfo;
};

displayReposError = function(error) {
  console.log(error);
};
