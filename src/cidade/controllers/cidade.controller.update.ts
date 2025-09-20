import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ROTA } from '../../commons/constants/url.sistema';
import { CidadeRequest } from '../dto/request/cidade.request';
import { CidadeServiceUpdate } from '../service/cidade.service.update';

@Controller(ROTA.CIDADE.BASE)
export class CidadeControllerUpdate {
  constructor(private readonly cidadeServiceUpdate: CidadeServiceUpdate) {}

  @HttpCode(HttpStatus.OK)
  @Put(ROTA.CIDADE.UPDATE)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() cidadeRequest: CidadeRequest,
  ) {
    const response = this.cidadeServiceUpdate.update(id, cidadeRequest);
    return response;
  }
}
