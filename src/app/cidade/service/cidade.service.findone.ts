import { Injectable } from '@nestjs/common';
import { tabelaCidade } from './tabela.service';

@Injectable()
export class CidadeServiceFindOne {

  private cidades = tabelaCidade;
  constructor() {}

  findOne(id: number) {
    return this.cidades.find(c => c.idCidade === id);
  }
}
