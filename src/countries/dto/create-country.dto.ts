import { IsString } from 'class-validator'

export class CreateCountryDto {
  @IsString()
  readonly name: string
}
