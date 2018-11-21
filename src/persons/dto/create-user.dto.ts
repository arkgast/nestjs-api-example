import { IsString, IsEmail } from 'class-validator'

export class CreateUserDto {
  @IsString()
  readonly name: string

  @IsString()
  readonly lastName: string

  @IsEmail()
  readonly email: string
}
