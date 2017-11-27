const http = require('http');
const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require("./schema");
const models = require('./database/models');

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    context: {},
    rootValue: {
        db: models
    },
    graphiql: true,
    pretty: true,
}));

const port = 4000;
const server = http.createServer(app);

models.sequelize.sync()
    .then(() => {
        server.listen(port, () => {
            console.log(`Running a GraphQL API server at http://localhost:${port}/graphql`);
        });
    });
