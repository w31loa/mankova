import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma, Request } from '@prisma/client';

@Injectable()
export class MailService {

    constructor(private readonly mailer:MailerService){}


    async newReqEmail(dto: Partial<Request>){
        await this.mailer.sendMail({
            to: dto.email,
            from: 'maxwell56.dostavka@mail.ru',
            subject: 'Ваш заказ создан!',
            template: 'index', // The `.pug` or `.hbs` extension is appended automatically.
            context: {  // Data to be sent to template engine.
                name: dto.name,
                id: dto.id,
                phoneNumber: dto.phoneNumber,
                distance: dto.distance,
                value: dto.value,
                weight: dto.weight,
                dangerClass: dto.dangerClass
            },
          }).then(()=>{
            console.log('Отправленно')
        }).catch(err=>{

            throw new HttpException(`${err.message}` , HttpStatus.BAD_REQUEST)
        })
    }
    async pendingEmail(dto: Partial<Request>){
        await this.mailer.sendMail({
            to: dto.email,
            from: 'maxwell56.dostavka@mail.ru',
            subject: 'Ваш заказ создан!',
            template: 'pending', // The `.pug` or `.hbs` extension is appended automatically.
            context: {  // Data to be sent to template engine.
                name: dto.name,
                id: dto.id,
                phoneNumber: dto.phoneNumber,
                distance: dto.distance,
                value: dto.value,
                weight: dto.weight,
                dangerClass: dto.dangerClass
            },
          }).then(()=>{
            console.log('Отправленно')
        }).catch(err=>{

            throw new HttpException(`${err.message}` , HttpStatus.BAD_REQUEST)
        })
    }
    async doneEmail(dto: Partial<Request>){
        await this.mailer.sendMail({
            to: dto.email,
            from: 'maxwell56.dostavka@mail.ru',
            subject: 'Ваш заказ создан!',
            template: 'done', // The `.pug` or `.hbs` extension is appended automatically.
            context: {  // Data to be sent to template engine.
                name: dto.name,
                id: dto.id,
                phoneNumber: dto.phoneNumber,
                distance: dto.distance,
                value: dto.value,
                weight: dto.weight,
                dangerClass: dto.dangerClass
            },
          }).then(()=>{
            console.log('Отправленно')
        }).catch(err=>{

            throw new HttpException(`${err.message}` , HttpStatus.BAD_REQUEST)
        })
    }


}
