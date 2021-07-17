import ContaExceptions from './exceptions';

export default class Conta {
  private idConta?: number;

  private idPessoa!: number;

  private saldo!: number;

  private limiteSaqueDiario!: number;

  private flagAtivo!: boolean;

  private tipoConta!: number;

  private dataCriacao!: Date;

  constructor(props: {
    idConta?: number;
    idPessoa: number;
    saldo: number;
    limiteSaqueDiario: number;
    flagAtivo: boolean;
    tipoConta: number;
    dataCriacao: Date;
  }) {
    Object.assign(this, props);
  }

  public block() {
    this.flagAtivo = false;
  }

  public deposit(amount: number) {
    this.checkIfAccountIsNotBlocked();

    if (amount <= 0) {
      throw new Error(ContaExceptions.DEPOSIT_AMOUNT_INVAlID);
    }

    this.saldo += amount;
  }

  public withdraw(amount: number) {
    this.checkIfAccountIsNotBlocked();

    if (amount > this.saldo) {
      throw new Error(ContaExceptions.WITHDRAW_AMOUNT_INVAlID);
    }

    this.saldo -= amount;
  }

  public getBalance() {
    this.checkIfAccountIsNotBlocked();

    return this.saldo;
  }

  private checkIfAccountIsNotBlocked() {
    if (!this.flagAtivo) {
      throw new Error(ContaExceptions.BLOCKED_ACCOUNT);
    }
  }

  public getIdConta(): number {
    return this.idConta!;
  }

  public toPlain(): any {
    return {
      idConta: this.idConta,
      idPessoa: this.idPessoa,
      saldo: this.saldo,
      limiteSaqueDiario: this.limiteSaqueDiario,
      flagAtivo: this.flagAtivo,
      tipoConta: this.tipoConta,
      dataCriacao: this.dataCriacao,
    };
  }
}
