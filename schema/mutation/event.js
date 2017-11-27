const graphql = require('graphql');
const { GraphQLString } = graphql;

const { eventInput } = require('../type');

const eventMutation = {
    type: eventInput,
    description: 'Create a new Event',
    // `args` describes the arguments that the `event` mutation accepts
    args: {
        name: { type: GraphQLString }
    },
    resolve: function (root, { name }, context) {
        return root.db.Event.create({
            name
        });
    }
}

module.exports = eventMutation;