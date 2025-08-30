import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { CidadeServiceFindOne } from '../service/cidade.service.findone';

@Controller('/cidade')
export class CidadeControllerFindone {
  constructor(private readonly cidadeServiceFindOne: CidadeServiceFindOne) {}
  @HttpCode(HttpStatus.OK)
  @Get('/listar/:id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cidadeServiceFindOne.findOne(id);
  }
}
