
export interface ToDo {
    id: string;
    title: string;
    createdOn: Date;
    doItOn: Date;
    description: string;
    notes: string[];
    status: ToDoStatus;

    categoryId: string;
    ownerId: string;
}

// TODO: DoItOnChangeEvent {todo, oldDoItOn, newDoItOn, doItOnChangedOn}
// TODO: ToDoStatusChangeEvent 
export interface ToDoCategory {
    categoryName: string;
    parentCategory: ToDoCategory;
    subCategories: ToDoCategory[];
}

export enum ToDoStatus {
    notStarted, inProgress, Completed
}

/**
 * Indicates the Place, Perspective, or possibly purpose of a collection of ToDos.
 * This can be used for something like sharing, streaming to a certain group, enabling
 * /disabling other key features such as performance analysis and reporting (one might
 * not want to have performance indicators or "todo-guidance" for things like cleaning
 * the house)
 */
export interface ToDoContext {
    
}

// ToDoCompletionEvent
export interface User {
    userIdEmail: string;
    createdOn: Date;
    passwordHash: string;
}

/**
 * Contains things like, the categories and todo's created and owned by this user. 
 * This is really a convenience object to query against/set things up for login sessions, etc
 * instead of hanging everything off of the User object.
 */
export interface UserAccountEnvironmentContext {

}

export interface UserLoginSession {
    loginSessionId: string;
    userIdEmail: string;
    loginActivatedOn: Date;
    loginDeactivatedOn: Date; // Logout operation...
}

// status: UserStatus;

// interface Organization
// interface Team