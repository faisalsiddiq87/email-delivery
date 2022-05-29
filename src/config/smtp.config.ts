import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

 var SMTPCONFIG =  [
   ConfigModule.forRoot(), MailerModule.forRoot({
    transport: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
      }
    },
    defaults: {
      from: '"No Reply" <' + process.env.SMTP_USER+ '>',
    },
    template: {
      dir: '../template/',
      adapter: new HandlebarsAdapter(),
      options: {
        strict: true,
      },
    },
    preview: false,
    options: {
      strict: true,
    },
  })];

  export default SMTPCONFIG