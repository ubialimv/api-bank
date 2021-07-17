import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import Transacao from '../../../../../domain/modules/transacao/entities/transacao.entity';

@Entity('Transacoes')
class TransacaoModel {
  @PrimaryGeneratedColumn()
  readonly idTransacao?: number;

  @Column()
  readonly idConta!: number;

  @Column()
  readonly valor!: number;

  @Column()
  readonly tipo!: 'saque' | 'deposito';

  @Column()
  readonly dataTransacao!: Date;

  constructor(
    idConta: number,
    valor: number,
    tipo: 'saque' | 'deposito',
    dataTransacao: Date,
    idTransacao?: number,
  ) {
    this.idConta = idConta;
    this.valor = valor;
    this.tipo = tipo;
    this.dataTransacao = dataTransacao;
    this.idTransacao = idTransacao;
  }

  static from(domain: Transacao): TransacaoModel {
    return new TransacaoModel(
      domain.idConta,
      domain.valor,
      domain.tipo,
      domain.dataTransacao,
      domain.idTransacao,
    );
  }

  toDomain(): Transacao {
    return new Transacao({
      idTransacao: this.idTransacao,
      idConta: this.idConta,
      valor: this.valor,
      tipo: this.tipo,
      dataTransacao: this.dataTransacao,
    });
  }
}

export default TransacaoModel;
