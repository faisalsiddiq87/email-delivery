import { MailerService } from '@nestjs-modules/mailer';
import { MailService } from './mail.service';
import { DeliverMailService } from './deliver-mail.service';

describe('MailService', () => {
  let mailService: MailService;
  let deliverMailService: DeliverMailService;
  let mailerService: MailerService;

  beforeEach(() => {
    deliverMailService = new DeliverMailService(mailerService);
    mailService = new MailService(deliverMailService);
  });

  it('should be defined', () => {
    expect(mailService).toBeDefined();
  });
});
