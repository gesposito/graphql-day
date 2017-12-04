const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType } = graphql;

const { event } = require('./query');
const { eventCreate } = require('./mutation');

// Define the Query type
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        event,
    }
});

// Define the Mutation type
const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        eventCreate,
    }
});

module.exports = new GraphQLSchema({ 
    query: queryType,
    mutation: mutationType
});