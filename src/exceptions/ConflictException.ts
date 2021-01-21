import statusCode from "../modules/statusCode";
import HttpException from "./HttpException";

class ConflictException extends HttpException {
  constructor(message: string) {
    super(statusCode.CONFLICT, message);
  }
}

export default ConflictException;
