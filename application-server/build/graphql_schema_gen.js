"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_typescript_1 = require("graphql-typescript");
// Type definition
// @Type
// @Field
// @Mutation
// @Nullable
// @Input
// Scalar types
let ToDo = class ToDo {
    constructor(title, description, notes, status, categoryId, ownderId) {
        this.title = title;
        this.description = description;
        this.notes = notes;
        this.status = status;
        this.categoryId = categoryId;
        this.ownerId = ownderId;
    }
};
__decorate([
    graphql_typescript_1.Field(() => graphql_typescript_1.String),
    __metadata("design:type", String)
], ToDo.prototype, "title", void 0);
__decorate([
    graphql_typescript_1.Field(() => graphql_typescript_1.String),
    __metadata("design:type", String)
], ToDo.prototype, "description", void 0);
__decorate([
    graphql_typescript_1.Field(() => [graphql_typescript_1.String]),
    __metadata("design:type", Array)
], ToDo.prototype, "notes", void 0);
__decorate([
    graphql_typescript_1.Field(() => ToDoStatus),
    __metadata("design:type", Number)
], ToDo.prototype, "status", void 0);
ToDo = __decorate([
    graphql_typescript_1.Type,
    __metadata("design:paramtypes", [String, String, Array, Number, String, String])
], ToDo);
let ToDoCategory = class ToDoCategory {
    constructor(categoryName, parentCategory, subCategories) {
        this.categoryName = categoryName;
        this.parentCategory = parentCategory;
        this.subCategories = subCategories;
    }
};
ToDoCategory = __decorate([
    graphql_typescript_1.Type,
    __metadata("design:paramtypes", [String, ToDoCategory, Array])
], ToDoCategory);
var ToDoStatus;
(function (ToDoStatus) {
    ToDoStatus[ToDoStatus["notStarted"] = 0] = "notStarted";
    ToDoStatus[ToDoStatus["inProgress"] = 1] = "inProgress";
    ToDoStatus[ToDoStatus["Completed"] = 2] = "Completed";
})(ToDoStatus || (ToDoStatus = {}));
// ToDoCompletionEvent
let User = class User {
    constructor(userIdEmail, createdOn, passwordHash) {
        this.userIdEmail = userIdEmail;
        this.createdOn = createdOn;
        this.passwordHash = passwordHash;
    }
};
User = __decorate([
    graphql_typescript_1.Type,
    __metadata("design:paramtypes", [String, Date, String])
], User);
/**
 * Contains things like, the categories and todo's created and owned by this user.
 */
let UserAccountEnvironmentContext = class UserAccountEnvironmentContext {
};
UserAccountEnvironmentContext = __decorate([
    graphql_typescript_1.Type
], UserAccountEnvironmentContext);
let UserLoginSession = class UserLoginSession {
    constructor(userIdEmail, createdOn, passwordHash) {
        this.userIdEmail = userIdEmail;
        this.createdOn = createdOn;
        this.passwordHash = passwordHash;
    }
};
UserLoginSession = __decorate([
    graphql_typescript_1.Type,
    __metadata("design:paramtypes", [String, Date, String])
], UserLoginSession);
// status: UserStatus;
