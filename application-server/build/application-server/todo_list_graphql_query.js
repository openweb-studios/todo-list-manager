"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const language_1 = require("graphql/language");
const todo_list_graphql_dal_model_1 = require("./todo_list_graphql_dal_model");
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
        createUser: async (parent, userInfo, context, info) => {
            console.log(userInfo.userIdEmail, userInfo.password);
            let document = await todo_list_graphql_dal_model_1.UserModel.create({ userIdEmail: userInfo.userIdEmail, password: userInfo.password });
            //.catch(err => {});
            return document._id;
            /**/
        },
        createToDo(parent, userInfo, context, info) {
            // userInfo.id: ID!
            // userInfo.title: String!
            // userInfo.createdOn: Date
            // userInfo.doItOn: Date
            // userInfo.description: String
            // userInfo.notes: [String]
            // userInfo.status: ToDoStatus
            // userInfo.categoryId: String
            // userInfo.ownerId: String
            console.log();
            return "200";
        }
    }
};
