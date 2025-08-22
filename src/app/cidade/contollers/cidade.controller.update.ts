import { Body, Controller, Param, Put } from '@nestjs/common';
import { ConverterCidade } from '../dto/conventer/cidade.dto.converter';
import { CidadeRequest } from '../dto/request/cidade.request';

@Controller('/cidade')
export class CidadeControllerUpdate {
  @Put('/alterar/:id')
  update(@Param('id') id: string, @Body() cidadeRequest: CidadeRequest) {
    const cidade = ConverterCidade.toCidade(cidadeRequest);
    const cidadeResponse = ConverterCidade.toCidadeResponse(cidade);

    return cidadeResponse;
  }
}
