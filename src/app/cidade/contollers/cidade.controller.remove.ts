import { Controller, Delete, HttpCode, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { CidadeServiceRemove } from '../service/cidade.service.remove';

@Controller('/cidade')
export class CidadeControllerRemove {
  constructor(private readonly cidadeServiceRemove: CidadeServiceRemove) {}
  @HttpCode(HttpStatus.OK)
  @Delete('/remover/:id')
  Delete(@Param('id', ParseIntPipe) id: number) {

    return this.cidadeServiceRemove.remove(id);
  }
}
