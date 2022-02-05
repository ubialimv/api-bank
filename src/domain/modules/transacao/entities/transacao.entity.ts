export enum EnumTipoTransacao {
  SAQUE = 'saque',
  DEPOSITO = 'deposito',
}

export type TipoTransacao = 'saque' | 'deposito';

export default class Transacao {
  readonly idTransacao?: number;

  readonly idConta!: number;

  readonly valor!: number;

  readonly tipo!: TipoTransacao;

  readonly dataTransacao!: Date;

  constructor(props: {
    idTransacao?: number;
    idConta: number;
    valor: number;
    tipo: TipoTransacao;
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
      dataTransacao: this.dataTransacao.toISOString(),
    };
  }
}
