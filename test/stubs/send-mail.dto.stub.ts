import { MailDto } from "../../src/mail/dto/mail.dto";

export const SendMailDTOStub = (): MailDto => {
  return {
    senderEmail: "faisal.siddiq87@gmail.com",
    receiverEmail: "faisal.siddiq87@gmail.com",
    body: "This is a mail from unit testing",
    subject: "Hi \n This is a mail from unit testing"
  };
};