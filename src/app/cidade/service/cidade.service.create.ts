import { Injectable } from '@nestjs/common';
import { ConverterCidade } from '../dto/conventer/cidade.dto.converter';
import { CidadeRequest } from '../dto/request/cidade.request';

@Injectable()
export class CidadeServiceCreate {
  constructor() {}

  create(cidadeRequest: CidadeRequest) {
    const cidade = ConverterCidade.toCidade(cidadeRequest);
    const cidadeResponse = ConverterCidade.toCidadeResponse(cidade);

    return cidadeResponse;
  }
}
