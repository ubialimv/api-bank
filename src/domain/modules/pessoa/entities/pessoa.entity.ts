export default class Pessoa {
  readonly idPessoa?: number;

  readonly nome!: string;

  readonly cpf!: string;

  readonly dataNascimento!: Date;

  constructor(props: {
    idPessoa?: number;
    nome: string;
    cpf: string;
    dataNascimento: string;
  }) {
    this.idPessoa = props.idPessoa;
    this.nome = props.nome;
    this.cpf = props.cpf;
    this.dataNascimento = new Date(props.dataNascimento);
  }

  public toPlain(): any {
    return {
      idPessoa: this.idPessoa,
      nome: this.nome,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento.toISOString(),
    };
  }
}
