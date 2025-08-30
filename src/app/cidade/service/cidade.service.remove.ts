import { Injectable } from '@nestjs/common';
import { tabelaCidade } from './tabela.service';

@Injectable()
export class CidadeServiceRemove {

  private cidades = tabelaCidade;
  constructor() {}

  remove(id: number) {
    const cidadeIndex = this.cidades.findIndex(c => c.idCidade === id);

    this.cidades.splice(cidadeIndex, 1);
    
    return this.cidades;
  }
}
