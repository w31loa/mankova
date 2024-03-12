import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { FileService } from 'src/file/file.service';

@Injectable()
export class CarService {

  constructor(private readonly prisma:PrismaService,
              private readonly file:FileService){}

  async create(createCarDto: Prisma.CarCreateInput , image) {

    const car = await this.prisma.car.findFirst({
      where:{
        title: createCarDto.title
      }
    })

    if(car){
      throw new HttpException('Такая машина уже есть', HttpStatus.BAD_REQUEST)
    }
    console.log(image)
    const filePath = await this.file.createFile(image, createCarDto.title)
    
    createCarDto.img = filePath

    return await this.prisma.car.create({data:createCarDto});
  }

  async findAll() {
    return await this.prisma.car.findMany();
  }

  async findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  async update(id: number, updateCarDto: Prisma.CarUpdateInput) {
    return await this.prisma.car.update({
      where:{
        id
      },
      data:updateCarDto
    });
  }

  async remove(id: number) {
    return await this.prisma.car.delete({
      where:{
        id
      }
    });
  }
}
