export default class Pessoa {
  readonly idPessoa?: number;

  readonly nome!: string;

  readonly cpf!: string;

  readonly dataNascimento!: Date;

  constructor(props: {
    idPessoa?: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
  }) {
    Object.assign(this, props);
  }

  public toPlain(): any {
    return {
      idPessoa: this.idPessoa,
      nome: this.nome,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
    };
  }
}
