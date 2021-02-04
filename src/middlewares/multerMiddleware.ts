import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
aws.config.update({
  secretAccessKey: process.env.S3_SECRET,
  region: process.env.S3_REGION,
  accessKeyId: process.env.S3_KEY,
});

const s3 = new aws.S3();
const multerProfileImage = multer({
  storage: multerS3({
    s3,
    bucket: "sopt-27-wooyeong",
    acl: "public-read",
    key: function (req, file, cb) {
      cb(null, "kimu/users/profileImage/" + Date.now() + "." + file.originalname.split(".").pop());
    },
  }),
});

const multerReviewImages = multer({
  storage: multerS3({
    s3,
    bucket: "sopt-27-wooyeong",
    acl: "public-read",
    key: function (req, file, cb) {
      cb(null, "kimu/users/reviewImage/" + Date.now() + "." + file.originalname.split(".").pop());
    },
  }),
});

export const uploadProfileImage = multerProfileImage.single("imageFile");
export const uploadReviewImages = multerReviewImages.array("imageFiles", 3);
