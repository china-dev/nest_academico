import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';

@Controller('/cidade')
export class CidadeControllerFindone {
  @HttpCode(HttpStatus.OK)
  @Get('/listar/:id')
  findOne(@Param('id') id: string): string {
    return `Cidade ${id}`;
  }
}
