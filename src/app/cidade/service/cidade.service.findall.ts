import { Injectable } from '@nestjs/common';
import { tabelaCidade } from './tabela.service';

@Injectable()
export class CidadeServiceFindall {
  constructor() {}

  findAll() {
    return tabelaCidade;
  }
}
