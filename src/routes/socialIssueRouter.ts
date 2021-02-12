import express from "express";
import SocialIssueController from "src/controllers/SocialIssueController";
const socialIssueRouter = express.Router();
const socialIssueController = new SocialIssueController();

socialIssueRouter.get("/", socialIssueController.getAllSocialIssues);

export default socialIssueRouter;
