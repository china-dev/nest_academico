import { Injectable } from '@nestjs/common';

@Injectable()
export class CidadeServiceFindOne {
  constructor() {}

  findone(id: string) {
    return `A cidade é ${id}`;
  }
}
