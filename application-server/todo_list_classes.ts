
import * as model from '../common/model'


export class ToDo implements model.ToDo {
    id: string;
    title: string;
    createdOn: Date;
    doItOn: Date;
    description: string;
    notes: string[];
    status: model.ToDoStatus;
    // attachments
    categoryId: string;
    ownerId: string;

    constructor(id: string, title: string, createdOn: Date, doItOn: Date, description: string, notes: string[], status: model.ToDoStatus, categoryId: string, ownderId: string) {
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

export class ToDoCategory implements model.ToDoCategory {
    categoryName: string;
    parentCategory: ToDoCategory;
    subCategories: ToDoCategory[];
    
    constructor(categoryName: string, parentCategory: ToDoCategory, subCategories: ToDoCategory[]) { 
        this.categoryName = categoryName;
        this.parentCategory = parentCategory;
        this.subCategories = subCategories;
    }
}

// ToDoCompletionEvent
export class User implements model.User {
    userIdEmail: string;
    createdOn: Date;
    passwordHash: string;

    constructor(userIdEmail: string, createdOn: Date, passwordHash: string) {
        this.userIdEmail = userIdEmail;
        this.createdOn = createdOn;
        this.passwordHash = passwordHash;
    }
}

/**
 * Contains things like, the categories and todo's created and owned by this user. 
 */
export class UserAccountEnvironmentContext {

}

export class UserLoginSession implements model.UserLoginSession {
    loginSessionId: string;
    userIdEmail: string;
    loginActivatedOn: Date;
    loginDeactivatedOn: Date;

    constructor(loginSessionId: string, userIdEmail: string, loginActivatedOn: Date, loginDeactivatedOn: Date) {
        this.loginSessionId = loginSessionId;
        this.userIdEmail = userIdEmail;
        this.loginActivatedOn = loginActivatedOn;
        this.loginDeactivatedOn = loginDeactivatedOn;
    }
}

// status: UserStatus; (accountCreated, accountActivated, accountDeactivated)