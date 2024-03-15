import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: "smtp.mail.ru",
        port: 465 ,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'maxwell56.dostavka@mail.ru', // generated ethereal user
          pass: 'Nn61UjaYdhYxGAiX2yB1'// generated ethereal password
        },
      },
      template: {
        dir: process.cwd() + '/template/',
        adapter: new HandlebarsAdapter(), // or new PugAdapter()
        options: {
          strict: true,
        },
      },
    })
  ],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
