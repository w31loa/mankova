import { HttpException, HttpStatus, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';    
import { $Enums, Prisma, User } from '@prisma/client';
import * as argon2 from 'argon2'

@Injectable()
export class UserService implements OnModuleInit{

  constructor(private readonly prisma:PrismaService){}

  async create(createUserDto:CreateUserDto) {

    const existUser = await this.findOneByPhone(createUserDto.number)
    console.log(existUser)
    if(existUser){
      throw new HttpException('Аккаунт уже существеут!', HttpStatus.BAD_REQUEST)
    }

    const data = {
      phoneNumber: createUserDto.number,
      password_hash: await argon2.hash(createUserDto.password)
    } 
    const newUser = await this.prisma.user.create({data})
    console.log(newUser)

    return newUser;
  }

  async findAll() {
    return await this.prisma.user.findMany()
  }


  async findOne(id: number) {
    return await this.prisma.user.findUnique({where: {id} });
  }

  async findOneByPhone(phone:string){
    const user = await this.prisma.user.findFirst({where: {phoneNumber: phone} })
    console.log(phone)
    return user
  }

  async update(id: number, updateUserDto: Partial<User>) {
    return await  this.prisma.user.update({where: {id} , data: updateUserDto});
  }

  async remove(id: number) {
    return await this.prisma.user.delete({where: {id} });
  }

  async onModuleInit() {
    const admin = await this.prisma.user.findFirst({where: {
      role: "ADMIN"
    } })

    if(!admin){
      const data = {
        phoneNumber: "+7(777) 777-7777",
        password_hash: await argon2.hash('root'),
        role:"ADMIN" as $Enums.Role

      }

      const newAdmin = await this.prisma.user.create({data})

      console.log(newAdmin)
    }

    
    console.log(admin)

  }

}
