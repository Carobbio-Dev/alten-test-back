import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  code: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  inventoryStatus: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  image?: string;

  @ApiProperty()
  rating?: number;
}
