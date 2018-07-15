"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todo_list_graphql_dal_schema_1 = require("./todo_list_graphql_dal_schema");
var connection = mongoose_1.createConnection('mongodb://localhost:27017/todo_list_manager');
exports.UserModel = connection.model("User", todo_list_graphql_dal_schema_1.userSchema);
