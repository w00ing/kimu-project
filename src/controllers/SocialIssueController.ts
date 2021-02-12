import { Request, Response, NextFunction } from "express";
import logging from "src/config/logging";
import InternalServerException from "src/exceptions/InternalServerException";
import responseMessage from "src/modules/responseMessage";
import { BaseController } from "./BaseController";

class SocialIssueController extends BaseController {
  private NAMESPACE = "Social Issue Controller";

  public getAllSocialIssues = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get all social issues");

    try {
      const socialIssues = await this.socialIssueRepo.find();
      this.OK(res, responseMessage.GET_ALL_SOCIAL_ISSUES_SUCCESS, socialIssues);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };
}

export default SocialIssueController;
