"use strict";
/**
 * Mongo Database Info:
 *
 * todo_list_manager
 *     - todo
 *     - user
 */
Object.defineProperty(exports, "__esModule", { value: true });
//  class DataAccessLayer {
//  }
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    userIdEmail: String,
    createdOn: Date,
    passwordHash: String,
}, { timestamps: { createdAt: 'createdOn' } });
