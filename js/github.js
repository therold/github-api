const apiKey = require('./../.env').apiKey;
const baseURL = "https://api.github.com";

function Github() {

}

Github.prototype.search = function(search, page, displayFunction, paginationFunction, displayError) {
  $.get(`${baseURL}/search/users?q=${search}&page=${page}&access_token=${apiKey}`)
    .then(function(response) {
      displayFunction(response);
      paginationFunction(search, response.total_count, page);
    }).fail(function(error) {
      displayError(error.responseJSON.message);
    });
};

Github.prototype.user = function(username, n, displayFunction, displayError) {
  $.get(`${baseURL}/users/${username}?access_token=${apiKey}`)
    .then(function(response) {
      displayFunction(response, n);
    }).fail(function(error) {
      displayError(error.responseJSON.message, n);
    });
};

Github.prototype.repos = function(username, displayFunction, displayError) {
  $.get(`${baseURL}/users/${username}/repos?access_token=${apiKey}`)
    .then(function(response) {
      displayFunction(response);
    }).fail(function(error) {
      displayError(error.responseJSON.message, n);
    });
};

exports.githubModule = Github;
