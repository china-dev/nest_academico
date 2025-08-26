import { Injectable } from '@nestjs/common';

@Injectable()
export class CidadeServiceRemove {
  constructor() {}

  delete(id: string) {
    return `${id} removida com sucesso!!!`;
  }
}
