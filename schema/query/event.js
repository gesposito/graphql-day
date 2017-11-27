const graphql = require('graphql');
const { GraphQLString } = graphql;

const { event } = require('../type');

const eventQuery = {
    type: event,
    // `args` describes the arguments that the `event` query accepts
    args: {
        id: { type: GraphQLString }
    },
    resolve: function (root, { id }, context) {
        return root.db.Event.findById(id, {
            include: [{
                model: root.db.User,
                as: "attendees",
                through: {
                    attributes: []
                }
            }]
        }).then((data) => {
            // data.set("name", null)
            return data;
        });
    }
}

module.exports = eventQuery;

