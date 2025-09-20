import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ROTA } from '../../commons/constants/url.sistema';
import { CidadeRequest } from '../dto/request/cidade.request';
import { CidadeServiceCreate } from '../service/cidade.service.create';

@Controller(ROTA.CIDADE.BASE)
export class CidadeControllerCreate {
  constructor(private readonly cidadeServiceCreate: CidadeServiceCreate) {}

  @HttpCode(HttpStatus.CREATED)
  @Post(ROTA.CIDADE.CREATE)
  create(@Body() cidadeRequest: CidadeRequest) {
    const response = this.cidadeServiceCreate.create(cidadeRequest);
    return response;
  }
}
