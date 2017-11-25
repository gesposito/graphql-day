const graphql = require('graphql');
const { GraphQLString } = graphql;

const { event } = require('../type');

const fakeDatabase = [
    {},
    {
        id: 1,
        name: 'DevDay Salerno',
    },
    {
        id: 2,
        name: 'DevDay Napoli',
    }
];

const eventQuery = {
    type: event,
    // `args` describes the arguments that the `event` query accepts
    args: {
        id: { type: GraphQLString }
    },
    resolve: function (_, { id }) {
        return fakeDatabase[id];
    }
}

module.exports = eventQuery;
