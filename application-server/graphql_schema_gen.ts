
import { Type, Field, Nullable, Mutation, String, Boolean, Int, makeSchema } from 'graphql-typescript'

// Type definition
// @Type
// @Field
// @Mutation
// @Nullable
// @Input
// Scalar types
@Type
class ToDo {
    @Field(() => String)
    title: string;
    @Field(() => String)
    description: string;
    @Field(() => [String])
    notes: string[];
    @Field(() => ToDoStatus)
    status: ToDoStatus;
    // attachments

    categoryId: string;
    ownerId: string;

    constructor(title: string, description: string, notes: string[], status: ToDoStatus, categoryId: string, ownderId: string) {
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.status = status;
        this.categoryId = categoryId; 
        this.ownerId = ownderId;
    }
}
@Type
class ToDoCategory {
    categoryName: string;
    parentCategory: ToDoCategory;
    subCategories: ToDoCategory[];
    
    constructor(categoryName: string, parentCategory: ToDoCategory, subCategories: ToDoCategory[]) { 
        this.categoryName = categoryName;
        this.parentCategory = parentCategory;
        this.subCategories = subCategories;
    }
}

@Type
enum ToDoStatus {
    notStarted, inProgress, Completed
}

// ToDoCompletionEvent
@Type
class User {
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
@Type
class UserAccountEnvironmentContext {

}
@Type
class UserLoginSession {
    userIdEmail: string;
    createdOn: Date;
    passwordHash: string;

    constructor(userIdEmail: string, createdOn: Date, passwordHash: string) {
        this.userIdEmail = userIdEmail;
        this.createdOn = createdOn;
        this.passwordHash = passwordHash;
    }
}

// status: UserStatus;