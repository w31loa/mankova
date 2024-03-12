import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServiceService {

  constructor(private readonly prisma:PrismaService){}

  async create(createServiceDto: Prisma.ServiceCreateInput) {
    
    const service = await this.prisma.service.findFirst({
      where: {
        title: createServiceDto.title
      }
    }) 

    if(service){
      throw new HttpException('Такая усоуга уже существует', HttpStatus.BAD_REQUEST)
    }
    



    return  await this.prisma.service.create({data:createServiceDto})
  }

  async findAll() {
    return await this.prisma.service.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.service.findFirst({
      where:{id}
    });
  }

  async update(id: number, updateServiceDto: Prisma.ServiceUpdateInput) {
    return await this.prisma.service.update({
      where:{id},
      data: updateServiceDto
    });
  }

  async remove(id: number) {
    return await this.prisma.service.delete({
      where:{id}
    });
  }
}
