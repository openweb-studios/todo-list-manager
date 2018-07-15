
import gql from 'graphql-tag';

export const schemaItems = gql`
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

type UserLoginSession {
    userIdEmail: String
    createdOn: Date
    passwordHash: String
}

type Query {
    allToDosForUser(userId: String!): [ToDo]
}

type Mutation {
    createUser(userIdEmail: String!, password: String!): ID
}
`