const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

// Define the User type
const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
    }
});

module.exports = userType;