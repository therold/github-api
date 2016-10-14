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

  $('.repos').click(function() {
    github.repos(user.login, displayRepos, displayReposError);
  });
};

displayUserError = function(error) {
  $('.loading').hide();
  $('.user').append(`<h3>Error: ${error}</h3>`);
};

displayRepos = function(repos) {
  console.log(repos);
};

displayReposError = function(error) {
  console.log(error);
};
