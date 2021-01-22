import responseMessage from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import HttpException from "./HttpException";

class AuthenticationTokenMissingException extends HttpException {
  constructor() {
    super(statusCode.UNAUTHORIZED, responseMessage.EMPTY_TOKEN);
  }
}

export default AuthenticationTokenMissingException;
