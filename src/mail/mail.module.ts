import { Module, Global } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MailService } from './service/mail.service';
import { MailController } from './controller/mail.controller';
import  SMTPCONFIG from '../config/smtp.config';
import { DeliverMailService } from './service/deliver-mail.service';

const bullModule = BullModule.forRoot({redis: {host: process.env.REDIS_HOST, port: process.env.REDIS_PORT}});

@Global()
@Module({
  imports: [
    bullModule,
    ...SMTPCONFIG
  ],
  providers: [MailService, DeliverMailService],
  controllers: [MailController],
  exports: [bullModule, MailService, DeliverMailService],
})

export class MailModule {}