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
exports.ConfirmUserDto = exports.UpdateUserSocialIssuesDto = exports.UpdateUserPasswordDto = exports.UpdateUserInfoDto = exports.LoginUserDto = exports.CreateUserDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "email", void 0);
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "password", void 0);
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "gender", void 0);
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "phoneNumber", void 0);
    __decorate([
        class_validator_1.IsDate(),
        class_transformer_1.Type(function (type) { return Date; }),
        __metadata("design:type", Date)
    ], CreateUserDto.prototype, "birthdate", void 0);
    __decorate([
        class_validator_1.IsArray(),
        __metadata("design:type", Array)
    ], CreateUserDto.prototype, "socialIssueNames", void 0);
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
var LoginUserDto = /** @class */ (function () {
    function LoginUserDto() {
    }
    __decorate([
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], LoginUserDto.prototype, "email", void 0);
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], LoginUserDto.prototype, "password", void 0);
    return LoginUserDto;
}());
exports.LoginUserDto = LoginUserDto;
var UpdateUserInfoDto = /** @class */ (function () {
    function UpdateUserInfoDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UpdateUserInfoDto.prototype, "address", void 0);
    __decorate([
        class_validator_1.IsDate(),
        class_transformer_1.Type(function (type) { return Date; }),
        __metadata("design:type", Date)
    ], UpdateUserInfoDto.prototype, "birthdate", void 0);
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UpdateUserInfoDto.prototype, "gender", void 0);
    __decorate([
        class_validator_1.IsArray(),
        __metadata("design:type", Array)
    ], UpdateUserInfoDto.prototype, "socialIssueNames", void 0);
    return UpdateUserInfoDto;
}());
exports.UpdateUserInfoDto = UpdateUserInfoDto;
var UpdateUserPasswordDto = /** @class */ (function () {
    function UpdateUserPasswordDto() {
    }
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], UpdateUserPasswordDto.prototype, "password", void 0);
    return UpdateUserPasswordDto;
}());
exports.UpdateUserPasswordDto = UpdateUserPasswordDto;
var UpdateUserSocialIssuesDto = /** @class */ (function () {
    function UpdateUserSocialIssuesDto() {
    }
    __decorate([
        class_validator_1.IsArray(),
        __metadata("design:type", Array)
    ], UpdateUserSocialIssuesDto.prototype, "socialIssueNames", void 0);
    return UpdateUserSocialIssuesDto;
}());
exports.UpdateUserSocialIssuesDto = UpdateUserSocialIssuesDto;
var ConfirmUserDto = /** @class */ (function () {
    function ConfirmUserDto() {
    }
    __decorate([
        class_validator_1.IsEmail(),
        __metadata("design:type", String)
    ], ConfirmUserDto.prototype, "email", void 0);
    __decorate([
        class_validator_1.IsString(),
        __metadata("design:type", String)
    ], ConfirmUserDto.prototype, "password", void 0);
    return ConfirmUserDto;
}());
exports.ConfirmUserDto = ConfirmUserDto;
//# sourceMappingURL=userDto.js.map