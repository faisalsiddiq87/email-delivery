import { MailerService } from '@nestjs-modules/mailer';
import { MailController } from './mail.controller';
import { MailService } from '../service/mail.service';
import { DeliverMailService } from '../service/deliver-mail.service';

describe('MailController', () => {
  let controller: MailController;
  let mailService: MailService;
  let deliverMailService: DeliverMailService;
  let mailerService: MailerService;

  beforeEach(() => {
    deliverMailService = new DeliverMailService(mailerService);
    mailService = new MailService(deliverMailService);
    controller = new MailController(mailService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
