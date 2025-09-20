export interface Result<T> {
  status: number;
  timeStamp?: string;
  mensagem: string | null;
  erro: string | null;
  dados: T | null;
  path: string | null;
}
 
export class Mensagem<T> {

  status: number = 0;
  timeStamp?: string;
  mensagem: string | null = null;
  erro: string | null = null;
  dados: T | null = null;
  path: string | null = null;

  constructor(
    status: number,
    mensagem: string | null = null,
    erro: string | null = null,
    dados: T | null = null,
    path: string| null = null,
  ){

    this.status = status;
    this.mensagem = mensagem;
    this.erro = erro;
    this.dados = dados;
    this.path = path;    
  }

  toJSON(): Result<T>{
    const result: Result<T> = {
      status: this.status,
      timeStamp: new Date().toISOString().split('T')[0],
      path: this.path
    };

    if(this.mensagem !== null && this.mensagem !== undefined) {
      result.mensagem = this.mensagem;
    }

    return result;
  }
}