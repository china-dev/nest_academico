import { Injectable } from '@nestjs/common';

@Injectable()
export class CidadeServiceFindall {
  constructor() {}

  findall() {
    return 'Listar todas as cidades';
  }
}
