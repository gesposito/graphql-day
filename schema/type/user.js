const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const { github } = require('../loader');

// Define the User type
const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        location: {
            type: GraphQLString,
            resolve: (self) => github.load(self.username)
        }
    }
});

module.exports = userType;