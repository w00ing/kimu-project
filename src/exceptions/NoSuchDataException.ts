import statusCode from "../modules/statusCode";
import HttpException from "./HttpException";

class NoSuchDataException extends HttpException {
  constructor(message: string) {
    super(statusCode.NOT_FOUND, message);
  }
}

export default NoSuchDataException;
