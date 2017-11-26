const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } = graphql;

const userType = require("./user");

// Define the Event type
const eventType = new GraphQLObjectType({
    name: 'Event',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        attendees: { type: new GraphQLList(userType) },
    }
});

module.exports = eventType;