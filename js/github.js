const apiKey = require('./../.env').apiKey;
const baseURL = "https://api.github.com";

function Github() {

}

Github.prototype.search = function(search, displayFunction, displayError) {
  $.get(`${baseURL}/search/users?q=${search}&access_token=${apiKey}`)
    .then(function(response) {
      displayFunction(response);
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

test = function() {};

exports.githubModule = Github;
