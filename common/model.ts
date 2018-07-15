
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

// ToDoCompletionEvent
export interface User {
    userIdEmail: string;
    createdOn: Date;
    passwordHash: string;
}

/**
 * Contains things like, the categories and todo's created and owned by this user. 
 */
export interface UserAccountEnvironmentContext {

}

export interface UserLoginSession {
    userIdEmail: string;
    createdOn: Date;
    passwordHash: string;
}

// status: UserStatus;