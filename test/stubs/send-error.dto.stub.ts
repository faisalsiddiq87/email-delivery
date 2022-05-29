import { MailDto } from "../../src/mail/dto/mail.dto";

export const SendErrorDTOStub = (): MailDto => {
  return {
    senderEmail: "",
    receiverEmail: "",
    body: "",
    subject: ""
  };
};