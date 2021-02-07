"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadReviewImages = exports.uploadProfileImage = void 0;
var multer_1 = __importDefault(require("multer"));
var multer_s3_1 = __importDefault(require("multer-s3"));
var aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.update({
    secretAccessKey: process.env.S3_SECRET,
    region: process.env.S3_REGION,
    accessKeyId: process.env.S3_KEY,
});
var s3 = new aws_sdk_1.default.S3();
var multerProfileImage = multer_1.default({
    storage: multer_s3_1.default({
        s3: s3,
        bucket: "sopt-27-wooyeong",
        acl: "public-read",
        key: function (req, file, cb) {
            cb(null, "kimu/users/profileImage/" + Date.now() + "." + file.originalname.split(".").pop());
        },
    }),
});
var multerReviewImages = multer_1.default({
    storage: multer_s3_1.default({
        s3: s3,
        bucket: "sopt-27-wooyeong",
        acl: "public-read",
        key: function (req, file, cb) {
            cb(null, "kimu/users/reviewImage/" + Date.now() + "." + file.originalname.split(".").pop());
        },
    }),
});
exports.uploadProfileImage = multerProfileImage.single("imageFile");
exports.uploadReviewImages = multerReviewImages.array("imageFiles", 3);
//# sourceMappingURL=multerMiddleware.js.map