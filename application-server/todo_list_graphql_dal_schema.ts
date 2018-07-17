
/**
 * Mongo Database Info:
 * 
 * todo_list_manager
 *     - todo
 *     - user
 */

//  class DataAccessLayer {

//  }

import { Schema, model} from "mongoose";

export var userSchema: Schema = new Schema({
    userIdEmail: String,
    createdOn: Date,
    passwordHash: String,
}, { timestamps: { createdAt: 'createdOn' } });


