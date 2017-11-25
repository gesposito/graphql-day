const graphql = require('graphql');
const { GraphQLSchema, GraphQLObjectType } = graphql;

const { event } = require('./query');

// Define the Query type
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        event,
    }
});

module.exports = new graphql.GraphQLSchema({ 
    query: queryType 
});