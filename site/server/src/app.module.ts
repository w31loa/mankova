import { User } from '@prisma/client';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';
import { UserModule } from './user/user.module';
import { ServiceModule } from './service/service.module';
import { CarModule } from './car/car.module';
import { RequestModule } from './request/request.module';

@Module({
  imports: [AuthModule, FileModule, UserModule, ServiceModule, CarModule, RequestModule],
})
export class AppModule {}
