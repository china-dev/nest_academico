import { Injectable } from '@nestjs/common';

@Injectable()
export class CidadeServiceRemove {
  constructor() {}

  remove(id: string) {
    return `${id} removida com sucesso!!!`;
  }
}
