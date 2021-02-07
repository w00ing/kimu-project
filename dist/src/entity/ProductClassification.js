"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.Topic = exports.Subcategory = exports.Category = exports.ProductClassification = void 0;
var typeorm_1 = require("typeorm");
var Product_1 = require("./Product");
var ProductClassification = /** @class */ (function () {
    function ProductClassification() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], ProductClassification.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], ProductClassification.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ default: true }),
        __metadata("design:type", Boolean)
    ], ProductClassification.prototype, "isUsed", void 0);
    return ProductClassification;
}());
exports.ProductClassification = ProductClassification;
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.OneToMany(function (type) { return Subcategory; }, function (subcategory) { return subcategory.category; }),
        __metadata("design:type", Array)
    ], Category.prototype, "subcategories", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Product_1.Product; }, function (product) { return product.category; }),
        __metadata("design:type", Array)
    ], Category.prototype, "products", void 0);
    Category = __decorate([
        typeorm_1.Entity()
    ], Category);
    return Category;
}(ProductClassification));
exports.Category = Category;
var Subcategory = /** @class */ (function (_super) {
    __extends(Subcategory, _super);
    function Subcategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Category; }, function (category) { return category.subcategories; }),
        __metadata("design:type", Category)
    ], Subcategory.prototype, "category", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], Subcategory.prototype, "productCount", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Product_1.Product; }, function (product) { return product.subcategory; }),
        __metadata("design:type", Array)
    ], Subcategory.prototype, "products", void 0);
    Subcategory = __decorate([
        typeorm_1.Entity()
    ], Subcategory);
    return Subcategory;
}(ProductClassification));
exports.Subcategory = Subcategory;
var Topic = /** @class */ (function (_super) {
    __extends(Topic, _super);
    function Topic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.ManyToMany(function (type) { return Product_1.Product; }, function (product) { return product.topics; }),
        __metadata("design:type", Array)
    ], Topic.prototype, "products", void 0);
    Topic = __decorate([
        typeorm_1.Entity()
    ], Topic);
    return Topic;
}(ProductClassification));
exports.Topic = Topic;
//# sourceMappingURL=ProductClassification.js.map