import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ROTA } from '../../commons/constants/url.sistema';
import { CidadeServiceRemove } from '../service/cidade.service.remove';

@Controller(ROTA.CIDADE.BASE)
export class CidadeControllerRemove {
  constructor(private readonly cidadeServiceRemove: CidadeServiceRemove) {}

  @HttpCode(HttpStatus.OK) //NO_CONTENT
  @Delete(ROTA.CIDADE.DELETE)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cidadeServiceRemove.remove(id);
  }
}
