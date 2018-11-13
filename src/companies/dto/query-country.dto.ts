import { ApiModelProperty } from '@nestjs/swagger'

export class QueryCountry {
  @ApiModelProperty({ description: 'Country ID', required: false })
  country: string
}
