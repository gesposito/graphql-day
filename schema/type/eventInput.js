const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const userType = require("./user");

// Define the EventInput type
const eventInputType = new GraphQLObjectType({
    name: 'EventInput',
    fields: {
        name: { type: GraphQLString },
    }
});

module.exports = eventInputType;