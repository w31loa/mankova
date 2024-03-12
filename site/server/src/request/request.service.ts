import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RequestService {

  constructor(private readonly prisma:PrismaService){}

  async create(createRequestDto: Prisma.RequestCreateInput) {

    const newReq = await this.prisma.request.create({
      data:  createRequestDto
    })
    return newReq;
  }

  async findAll() {
    return  await this.prisma.request.findMany({
      include:{
        service:{
          select:{
            title: true
          }
        }
      }
    });
  }

  async findOneByPhoneNumber(number: string) {
    return await this.prisma.request.findMany({
      where:{
        phoneNumber: number
      }
    });
  }

  async update(id: number, updateRequestDto: Prisma.RequestUpdateInput) {

    const req = await this.prisma.request.findUnique({
      where:{id}
    })

    if(!req){
      throw new HttpException('Нет такой заявки', HttpStatus.BAD_REQUEST)
    }

    return await this.prisma.request.update({
      where: {id},
      data: updateRequestDto
    })
  }

  async remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
