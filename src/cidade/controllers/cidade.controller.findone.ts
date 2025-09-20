import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ROTA } from '../../commons/constants/url.sistema';
import { CidadeResponse } from '../dto/response/cidade.response';
import { CidadeServiceFindOne } from '../service/cidade.service.findone';
@Controller(ROTA.CIDADE.BASE)
export class CidadeControllerFindOne {
  constructor(private readonly cidadeServiceFindOne: CidadeServiceFindOne) {}

  @HttpCode(HttpStatus.OK)
  @Get(ROTA.CIDADE.BY_ID)
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CidadeResponse | null> {
    const response = await this.cidadeServiceFindOne.findOne(id);
    return response;
  }
}
