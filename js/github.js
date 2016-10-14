const apiKey = require('./../.env').apiKey;
const baseURL = "https://api.github.com/users/";

function Github() {

}

Github.prototype.search = function(search) {
  $.get(`${baseURL}${search}?access_token=${apiKey}`)
    .then(function(response) {
      console.log(response);
    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
};

exports.githubModule = Github;
