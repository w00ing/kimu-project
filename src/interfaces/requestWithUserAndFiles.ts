import RequestWithUser from "./requestWithUser";

interface RequestWithUserAndFiles extends RequestWithUser {
  files: Express.MulterS3.File[];
}

export default RequestWithUserAndFiles;
