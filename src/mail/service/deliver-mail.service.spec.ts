import { MailerService } from '@nestjs-modules/mailer';
import { DeliverMailService } from './deliver-mail.service';

describe('DeliverMailService', () => {
  let mailerService: MailerService;
  let deliverMailService: DeliverMailService;

  beforeEach(() => {
    deliverMailService = new DeliverMailService(mailerService);
  });

  it('should be defined', () => {
    expect(deliverMailService).toBeDefined();
  });
});
