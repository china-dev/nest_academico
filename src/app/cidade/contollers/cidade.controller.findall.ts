import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('/cidade')
export class CidadeControllerFindall {
  @HttpCode(HttpStatus.OK)
  @Get('/listar')
  findall() {
    return 'Listar todas as cidades';
  }
}
