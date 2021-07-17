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
    Object.assign(this, props);
  }
}
