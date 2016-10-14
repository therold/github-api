const apiKey = require('./../.env').apiKey;
const baseURL = "https://api.github.com";

function Github() {

}

Github.prototype.search = function(search) {
  $.get(`${baseURL}/search/users?q=${search}&access_token=${apiKey}`)
    .then(function(response) {
      console.log(response);
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
};

exports.githubModule = Github;
