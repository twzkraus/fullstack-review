const axios = require('axios');

new Promise((resolve, reject) => { TOKEN }).catch(() => {
  const config = require('../config.js')
  const TOKEN = config.TOKEN;
});

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${TOKEN}`
    }
  };

  return axios.get(`https://api.github.com/users/${username}/repos`, {params: options});
};

module.exports.getReposByUsername = getReposByUsername;