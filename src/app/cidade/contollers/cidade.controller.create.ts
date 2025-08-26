import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CidadeRequest } from '../dto/request/cidade.request';
import { CidadeServiceCreate } from '../service/cidade.service.create';

@Controller('/cidade')
export class CidadeControllerCreate {
  constructor(private readonly cidadeService: CidadeServiceCreate) {}
  @HttpCode(HttpStatus.CREATED)
  @Post('/criar')
  create(@Body() cidadeRequest: CidadeRequest) {
    const response = this.cidadeService.create(cidadeRequest);
    return response;
  }
}
