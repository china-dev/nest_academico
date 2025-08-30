import { Injectable } from '@nestjs/common';
import { ConverterCidade } from '../dto/conventer/cidade.dto.converter';
import { CidadeRequest } from '../dto/request/cidade.request';
import { tabelaCidade } from './tabela.service';

@Injectable()
export class CidadeServiceCreate {

  private cidades = tabelaCidade;
  constructor() {}

  create(cidadeRequest: CidadeRequest) {
    const cidade = ConverterCidade.toCidade(cidadeRequest);

    const newIdCidade = this.cidades.length + 1;

    const newCidade = {
      ...cidade,
      idCidade: newIdCidade,
    };

    this.cidades.push(newCidade);

    return ConverterCidade.toCidadeResponse(newCidade);
  }
}
