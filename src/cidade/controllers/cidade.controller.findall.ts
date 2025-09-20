import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ROTA } from '../../commons/constants/url.sistema';
import { CidadeResponse } from '../dto/response/cidade.response';
import { CidadeServiceFindAll } from '../service/cidade.service.findall';

@Controller(ROTA.CIDADE.BASE)
export class CidadeControllerFindAll {
  constructor(private readonly cidadeServiceFindAll: CidadeServiceFindAll) {}

  @HttpCode(HttpStatus.OK)
  @Get(ROTA.CIDADE.LIST)
  async findAll(): Promise<CidadeResponse[]> {
    const response = await this.cidadeServiceFindAll.findAll();
    return response;
  }
}
