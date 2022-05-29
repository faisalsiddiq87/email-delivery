import { Injectable } from '@nestjs/common';
import { MailDto } from '../dto/mail.dto';
import { DeliverMailService } from './deliver-mail.service';

@Injectable()
export class MailService {
    constructor(private readonly deliverMailService: DeliverMailService) {}
    public mails: MailDto[] = [];

    public async sendMail(mail: MailDto) {
        this.mails.push(mail);
        return this.deliverMailService.sendEmail(mail);
    }
}
