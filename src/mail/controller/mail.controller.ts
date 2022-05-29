import { Controller, Post, UseInterceptors} from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { MailDto } from '../dto/mail.dto';
import { MailService } from '../service/mail.service';
import {TransformInterceptor} from '../../middleware/transform.interceptor';

@Controller('mail')
@UseInterceptors(TransformInterceptor)
export class MailController {
    constructor (private mailService: MailService){};
   
    @Post('/')
    public async sendMail(@Body() mail: MailDto) {
       return await this.mailService.sendMail(mail);
    }
}