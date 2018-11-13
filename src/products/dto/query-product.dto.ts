import { ApiModelProperty } from '@nestjs/swagger'

export class QueryProduct {
  @ApiModelProperty({ description: 'Company ID', required: false })
  company: string

  @ApiModelProperty({ description: 'Parent ID', required: false })
  parentId: string
}
