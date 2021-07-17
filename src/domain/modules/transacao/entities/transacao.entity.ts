export default class Transacao {
  readonly idTransacao?: number;

  readonly idConta!: number;

  readonly valor!: number;

  readonly tipo!: 'saque' | 'deposito';

  readonly dataTransacao!: Date;

  constructor(props: {
    idTransacao?: number;
    idConta: number;
    valor: number;
    tipo: 'saque' | 'deposito';
    dataTransacao: Date;
  }) {
    Object.assign(this, props);
  }

  public toPlain(): any {
    return {
      idTransacao: this.idTransacao,
      idConta: this.idConta,
      valor: this.valor,
      tipo: this.tipo,
      dataTransacao: this.dataTransacao,
    };
  }
}
