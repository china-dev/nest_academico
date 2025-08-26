import { Controller, Delete, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { CidadeServiceRemove } from '../service/cidade.service.remove';

@Controller('/cidade')
export class CidadeControllerRemove {
  constructor(private readonly cidadeServiceRemove: CidadeServiceRemove) {}
  @HttpCode(HttpStatus.OK)
  @Delete('/remover/:id')
  Delete(@Param('id') id: string) {
    const response = this.cidadeServiceRemove.delete(id);
    return response;
  }
}
