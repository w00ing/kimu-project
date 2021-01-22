import responseMessage from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import HttpException from "./HttpException";

class WrongAuthenticationTokenException extends HttpException {
  constructor() {
    super(statusCode.UNAUTHORIZED, responseMessage.INVALID_TOKEN);
  }
}

export default WrongAuthenticationTokenException;
