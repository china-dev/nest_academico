import { Body, Controller, HttpCode, HttpStatus, Param, ParseIntPipe, Put } from '@nestjs/common';
import { CidadeRequest } from '../dto/request/cidade.request';
import { CidadeServiceUpdate } from '../service/cidade.service.update';

@Controller('/cidade')
export class CidadeControllerUpdate {
  constructor(private readonly cidadeServiceUpdate: CidadeServiceUpdate) {}
  @HttpCode(HttpStatus.OK)
  @Put('/alterar/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() cidadeRequest: CidadeRequest) {
    return this.cidadeServiceUpdate.update(id, cidadeRequest);
  }
}
