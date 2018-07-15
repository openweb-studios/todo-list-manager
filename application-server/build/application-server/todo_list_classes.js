"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ToDo {
    constructor(id, title, createdOn, doItOn, description, notes, status, categoryId, ownderId) {
        this.id = id;
        this.title = title;
        this.createdOn = createdOn;
        this.doItOn = doItOn;
        this.description = description;
        this.notes = notes;
        this.status = status;
        this.categoryId = categoryId;
        this.ownerId = ownderId;
    }
}
exports.ToDo = ToDo;
class ToDoCategory {
    constructor(categoryName, parentCategory, subCategories) {
        this.categoryName = categoryName;
        this.parentCategory = parentCategory;
        this.subCategories = subCategories;
    }
}
exports.ToDoCategory = ToDoCategory;
// ToDoCompletionEvent
class User {
    constructor(userIdEmail, createdOn, passwordHash) {
        this.userIdEmail = userIdEmail;
        this.createdOn = createdOn;
        this.passwordHash = passwordHash;
    }
}
exports.User = User;
/**
 * Contains things like, the categories and todo's created and owned by this user.
 */
class UserAccountEnvironmentContext {
}
exports.UserAccountEnvironmentContext = UserAccountEnvironmentContext;
class UserLoginSession {
    constructor(loginSessionId, userIdEmail, loginActivatedOn, loginDeactivatedOn) {
        this.loginSessionId = loginSessionId;
        this.userIdEmail = userIdEmail;
        this.loginActivatedOn = loginActivatedOn;
        this.loginDeactivatedOn = loginDeactivatedOn;
    }
}
exports.UserLoginSession = UserLoginSession;
// status: UserStatus; (accountCreated, accountActivated, accountDeactivated)
