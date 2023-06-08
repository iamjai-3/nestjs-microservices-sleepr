import {
  DatabaseModule,
  LoggerModule,
  UserDocument,
  UserSchema,
} from '@app/common';
import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersRepository } from './users.respository';
import { UsersService } from './users.service';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
    LoggerModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
