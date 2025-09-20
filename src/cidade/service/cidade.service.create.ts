import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConverterCidade } from '../dto/converter/cidade.converter';
import { CidadeRequest } from '../dto/request/cidade.request';
import { CidadeResponse } from '../dto/response/cidade.response';
import { Cidade } from '../entity/cidade.entity';

@Injectable()
export class CidadeServiceCreate {
  constructor(
    @InjectRepository(Cidade)
    private cidadeRepository: Repository<Cidade>,
  ) {}

  async create(cidadeRequest: CidadeRequest): Promise<CidadeResponse | null> {
    let cidade = ConverterCidade.toCidade(cidadeRequest);

    const cidadeCadastrada = await this.cidadeRepository
    .createQueryBuilder('cidade')
    .where('cidade.NOME_CIDADE = :nome', { nome: cidade.nomeCidade })
    .getOne();

    if(cidadeCadastrada) {
      throw new HttpException('Cidade já existe', HttpStatus.BAD_REQUEST);
    }

    cidade = await this.cidadeRepository.save(cidade);
    
    return ConverterCidade.toCidadeResponse(cidade);
  }
}
