import { IsString, IsEmail, IsNumber } from 'class-validator'

export class CreateUserDto {
  @IsString()
  readonly handle: string

  @IsString()
  readonly detail: string

  @IsString()
  readonly nature: string

  @IsNumber()
  readonly number: number

  @IsString()
  readonly avatar: string

  @IsNumber()
  readonly phone: number

  @IsEmail()
  readonly email: string

  @IsString()
  readonly facebookId: string

  @IsString()
  readonly created: string

  readonly locale: object

  readonly labels: object
}
