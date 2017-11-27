const graphql = require('graphql');
const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = graphql;

const userType = require("./user");

// Define the EventInput type
const eventInputType = new GraphQLObjectType({
    name: 'EventInput',
    fields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
    }
});

module.exports = eventInputType;