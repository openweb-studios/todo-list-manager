"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
exports.query = {
    Date: new graphql_1.GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
            if (ast.kind === language_1.Kind.INT) {
                return new Date(ast.value); // ast value is always in string format
            }
            return null;
        },
    }),
    Query: {
        allToDosForUser(obj, args, context, info) { return null; }
        // allToDosForUserWithDoItDate(userId: String, doItDate: Date): [ToDo]
    },
    Mutation: {
        // userIdEmail: String!, password: String!
        createUser(parent, userInfo, context, info) {
            console.log(userInfo.userIdEmail, userInfo.password);
            return "200";
        },
    }
};
