import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import Conta from '../../../../../domain/modules/conta/entities/conta.entity';

@Entity('contas')
class ContaModel {
  @PrimaryGeneratedColumn()
  readonly idConta?: number;

  @Column()
  readonly idPessoa!: number;

  @Column()
  readonly saldo!: number;

  @Column()
  readonly limiteSaqueDiario!: number;

  @Column()
  readonly flagAtivo!: boolean;

  @Column()
  readonly tipoConta!: number;

  @Column()
  readonly dataCriacao!: Date;

  constructor(
    idPessoa: number,
    saldo: number,
    limiteSaqueDiario: number,
    flagAtivo: boolean,
    tipoConta: number,
    dataCriacao: Date,
    idConta?: number,
  ) {
    this.idPessoa = idPessoa;
    this.saldo = saldo;
    this.limiteSaqueDiario = limiteSaqueDiario;
    this.flagAtivo = flagAtivo;
    this.tipoConta = tipoConta;
    this.dataCriacao = dataCriacao;
    this.idConta = idConta;
  }

  static from(domain: Conta): ContaModel {
    const plain = domain.toPlain();

    return new ContaModel(
      plain.idPessoa,
      plain.saldo,
      plain.limiteSaqueDiario,
      plain.flagAtivo,
      plain.tipoConta,
      plain.dataCriacao,
      plain.idConta,
    );
  }

  toDomain(): Conta {
    return new Conta({
      idConta: this.idConta,
      idPessoa: this.idPessoa,
      saldo: this.saldo,
      limiteSaqueDiario: this.limiteSaqueDiario,
      flagAtivo: this.flagAtivo,
      tipoConta: this.tipoConta,
      dataCriacao: this.dataCriacao,
    });
  }
}

export default ContaModel;
