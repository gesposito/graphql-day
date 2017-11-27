const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType } = graphql;

const { event } = require('./query');
const { eventMutation } = require('./mutation');

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
        eventMutation,
    }
});

module.exports = new graphql.GraphQLSchema({ 
    query: queryType,
    mutation: mutationType
});