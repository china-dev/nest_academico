import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConverterCidade } from '../dto/converter/cidade.converter';
import { CidadeRequest } from '../dto/request/cidade.request';
import { CidadeResponse } from '../dto/response/cidade.response';
import { Cidade } from '../entity/cidade.entity';
import { CidadeServiceFindOne } from './cidade.service.findone';

@Injectable()
export class CidadeServiceUpdate {
  constructor(
    @InjectRepository(Cidade)
    private cidadeRepository: Repository<Cidade>,
    private cidadeServiceFindOne: CidadeServiceFindOne
  ) {}

  async update(id: number, cidadeRequest: CidadeRequest): Promise<CidadeResponse> {
    // let cidade = ConverterCidade.toCidade(cidadeRequest);

    // const cidadeCadastrada = await this.cidadeServiceFindOne.findById(id);

    // if (!cidadeCadastrada) {
    //   throw new HttpException('Cidade não localizada ', HttpStatus.NOT_FOUND);
    // }
    
    // const cidadeAtualizada = Object.assign(cidadeCadastrada, cidade);
    // cidade = await this.cidadeRepository.save(cidadeCadastrada);

    // return ConverterCidade.toCidadeResponse(cidade);

    // SOLUÇÃO TEMPORARIA PQ NAO FIZ O AUTO INCREMENT NO BANCO  
    const cidadeCadastrada = await this.cidadeServiceFindOne.findById(id);
    if (!cidadeCadastrada) {
      throw new HttpException('Cidade não localizada', HttpStatus.NOT_FOUND);
    }

    const partial = ConverterCidade.toCidade(cidadeRequest);

    // Usa update para garantir que será gerado um UPDATE SQL (não um INSERT)
    await this.cidadeRepository.update(id, partial);

    // Recarrega a entidade atualizada e converte para resposta
    const cidadeAtualizada = await this.cidadeServiceFindOne.findById(id);
    return ConverterCidade.toCidadeResponse(cidadeAtualizada!);
  }
}
