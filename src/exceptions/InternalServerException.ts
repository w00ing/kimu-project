import responseMessage from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import HttpException from "./HttpException";

class InternalServerException extends HttpException {
  constructor() {
    super(
      statusCode.INTERNAL_SERVER_ERROR,
      responseMessage.INTERNAL_SERVER_ERROR,
    );
  }
}

export default InternalServerException;
