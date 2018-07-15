import gql from 'graphql-tag';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { ToDo } from '../common/model';

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
        createUser(parent:any, userInfo:any, context:any, info:any) {
            console.log(userInfo.userIdEmail, userInfo.password);
            return "200";
        },
    }
}
