import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ConverterCidade } from '../dto/conventer/cidade.dto.converter';
import { CidadeRequest } from '../dto/request/cidade.request';

@Controller('/cidade')
export class CidadeControllerCreate {
  @HttpCode(HttpStatus.CREATED)
  @Post('/criar')
  create(@Body() cidadeRequest: CidadeRequest) {
    const cidade = ConverterCidade.toCidade(cidadeRequest);
    const cidadeResponse = ConverterCidade.toCidadeResponse(cidade);

    return cidadeResponse;
  }
}
