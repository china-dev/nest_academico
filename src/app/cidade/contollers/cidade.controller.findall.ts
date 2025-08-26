import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { CidadeServiceFindall } from '../service/cidade.service.findall';

@Controller('/cidade')
export class CidadeControllerFindall {
  constructor(private readonly cidadeServiceFindall: CidadeServiceFindall) {}
  @HttpCode(HttpStatus.OK)
  @Get('/listar')
  findall() {
    const response = this.cidadeServiceFindall.findall();
    return response;
  }
}
