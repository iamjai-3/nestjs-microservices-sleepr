import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @Length(8, 20, {
    message: 'Password must be between 8 and 20 characters',
  })
  password: string;
}
