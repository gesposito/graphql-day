const rp = require('request-promise-native');
const config = require('./config');

const github = {
    getInfoBy(username) {
        const query = `
            query location($username: String!) {
                user(login: $username) {
                    location
                }
            }
        `;

        const variables = {
            username
        };

        const options = {
            method: 'POST',
            uri: 'https://api.github.com/graphql',
            json: true,
            body: {
                query,
                variables
            },
            headers: {
                'User-Agent': "GraphQL Day",
                'Authorization': `token ${config.github}`
            },
            transform: ({ data }) => {
                return data.user.location;
            },
        };

        return rp(options);
    }
}

module.exports = github;