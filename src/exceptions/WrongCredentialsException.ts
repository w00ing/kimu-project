import responseMessage from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import HttpException from "./HttpException";

class WrongCredentialsException extends HttpException {
  constructor() {
    super(statusCode.UNAUTHORIZED, responseMessage.WRONG_CREDENTIALS);
  }
}

export default WrongCredentialsException;
