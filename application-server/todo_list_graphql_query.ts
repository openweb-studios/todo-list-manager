import gql from 'graphql-tag';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { ToDo } from '../common/model';
import { UserModel } from './todo_list_graphql_dal_model';

export const query = {
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        parseValue(value) {
        return new Date(value); // value from the client
        },
        serialize(value) {
        return value.getTime(); // value sent to the client
        },
        parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
            return new Date(ast.value) // ast value is always in string format
        }
        return null;
        },
    }),

    Query: {
        allToDosForUser(obj:any, args:any, context:any, info:any) { return null; }
    // allToDosForUserWithDoItDate(userId: String, doItDate: Date): [ToDo]
    },

    Mutation: {
        // userIdEmail: String!, password: String!
        createUser: async (parent:any, userInfo:any, context: any, info:any) => {
            console.log(userInfo.userIdEmail, userInfo.password);
            let document = await UserModel.create({ userIdEmail: userInfo.userIdEmail, password: userInfo.password });
                //.catch(err => {});
            return document._id;
            /**/
        },

        createToDo(parent:any, userInfo:any, context:any, info:any) {
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
        },

        loginUser: async (parent:any, userInfo:any, context: any, info:any) => {
            
        },

        // check that the current session is the users session, then logout the user.
        logoutUser: async (parent:any, userInfo:any, context: any, info:any) => {

        } 
    }
}
