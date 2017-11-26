const graphql = require('graphql');
const { GraphQLString } = graphql;

const { event } = require('../type');

const eventQuery = {
    type: event,
    // `args` describes the arguments that the `event` query accepts
    args: {
        id: { type: GraphQLString }
    },
    resolve: function (_, { id }, context) {
        return context.db.Event.findById(id, {
            include: [{ 
                model: context.db.User,
                as: "attendees",
                through: {
                    attributes: []
                }
            }]
        });
    }
}

module.exports = eventQuery;

