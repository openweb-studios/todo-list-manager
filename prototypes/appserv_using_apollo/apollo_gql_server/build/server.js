"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const { ApolloServer } = require('apollo-server-express');
const typeDefs = graphql_tag_1.default `
    type Query {
        hello: String
    }
`;
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};
function main() {
    let app = express_1.default();
    // app.
    let server = new ApolloServer({ typeDefs, resolvers });
    server.applyMiddleware({ app });
    app.listen(8080);
    // app.use("/graphql", bodyParser.json(), graphqlExpress);
}
main();
