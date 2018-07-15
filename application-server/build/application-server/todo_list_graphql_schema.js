"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.schemaItems = graphql_tag_1.default `
scalar Date

type ToDo {
    id: ID!
    title: String!
    createdOn: Date
    doItOn: Date
    description: String
    notes: [String]
    status: ToDoStatus
    categoryId: String
    ownerId: String
}

input ToDoInput {
    title: String!
    doItOn: Date
    description: String
    notes: [String]
    status: ToDoStatus
    categoryId: String
    ownerId: String
}

type ToDoCategory {
    categoryName: String
    parentCategory: ToDoCategory
    subCategories: [ToDoCategory]
}

enum ToDoStatus {
    NOTSTARTED, INPROGRESS, COMPLETED
}

type User {
    userIdEmail: String
    createdOn: Date
    passwordHash: String
}

input UserInput {
    userIdEmail: String
    createdOn: Date
    passwordHash: String
}

type UserLoginSession {
    userIdEmail: String
    createdOn: Date
    passwordHash: String
}

type Query {
    allToDosForUser(userId: String!): [ToDo]
}

type Mutation {
    createUser(userIdEmail: String!, password: String!): ID!

    createToDo(todo: ToDoInput): ID!
}
`;
