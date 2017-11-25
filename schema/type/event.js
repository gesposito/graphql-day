const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

// Define the Event type
const eventType = new GraphQLObjectType({
    name: 'Event',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
    }
});

module.exports = eventType;