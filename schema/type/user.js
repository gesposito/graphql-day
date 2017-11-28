const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;

const { github } = require('../../services');

// Define the User type
const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        location: {
            type: GraphQLString,
            resolve: (self) => github.getInfoBy(self.username)
        }
    }
});

module.exports = userType;