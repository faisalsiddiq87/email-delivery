import { Injectable, Logger} from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class DeliverMailService {
    constructor(private readonly mailerService: MailerService) {}
    
    public async sendEmail(mail) {
        var response = await this.mailerService.sendMail({
          to: mail.receiverEmail, // list of receivers
          from: mail.senderEmail, // sender address
          subject: mail.subject, // Subject line
          text: mail.body, // plaintext body
          html: '<pre>' + mail.body + '</pre>', // HTML body content
        }).catch(function(error) {
            Logger.log('Caught!', error);
        });

        return response;
    }
}
