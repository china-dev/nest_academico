import { Cidade } from '../../entity/cidade.entity';
import { CidadeRequest } from '../request/cidade.request';
import { CidadeResponse } from '../response/cidade.response';

export class ConverterCidade {
  static toCidade(CidadeRequest: CidadeRequest) {
    const cidade = new Cidade();

    cidade.idCidade = CidadeRequest.idCidade;
    cidade.nomeCidade = CidadeRequest.nomeCidade;
    cidade.codCidade = CidadeRequest.codCidade;

    return cidade;
  }
  static toCidadeResponse(cidade: Cidade) {
    const cidadeResponse = new CidadeResponse();

    cidadeResponse.codCidade = cidade.codCidade;
    cidadeResponse.nomeCidade = cidade.nomeCidade;

    return cidadeResponse;
  }
}
