import { model, createConnection } from 'mongoose';
import { userSchema } from './todo_list_graphql_dal_schema';

var connection = createConnection('mongodb://localhost:27017/todo_list_manager');

export var UserModel = connection.model("User", userSchema);
