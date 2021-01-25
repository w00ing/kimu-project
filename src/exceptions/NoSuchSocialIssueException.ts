import responseMessage from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import HttpException from "./HttpException";

class NoSuchSocialIssueException extends HttpException {
  constructor() {
    super(statusCode.NOT_FOUND, responseMessage.NO_SUCH_SOCIAL_ISSUE);
  }
}

export default NoSuchSocialIssueException;
