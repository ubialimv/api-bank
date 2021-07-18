import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Conta from '../../../../domain/modules/conta/entities/conta.entity';
// import Pessoa from '../../../../domain/modules/pessoa/entities/pessoa.entity';
import PessoaModel from './pessoa.model';

@Entity('contas')
class ContaModel {
  @PrimaryGeneratedColumn()
  idConta?: number;

  @ManyToOne(() => PessoaModel, (pessoa) => pessoa.contas)
  pessoa!: PessoaModel;

  @Column()
  saldo!: number;

  @Column()
  limiteSaqueDiario!: number;

  @Column()
  flagAtivo!: boolean;

  @Column()
  tipoConta!: number;

  @Column()
  dataCriacao!: Date;

  static from(domain: Conta): ContaModel {
    const plainDomain = domain.toPlain();

    const newContaModel = new ContaModel();

    newContaModel.saldo = plainDomain.saldo;
    newContaModel.limiteSaqueDiario = plainDomain.limiteSaqueDiario;
    newContaModel.flagAtivo = plainDomain.flagAtivo;
    newContaModel.tipoConta = plainDomain.tipoConta;
    newContaModel.dataCriacao = new Date(plainDomain.dataCriacao);
    newContaModel.idConta = plainDomain.idConta;

    return newContaModel;
  }

  toDomain(): Conta {
    return new Conta({
      idConta: this.idConta,
      idPessoa: this.pessoa.idPessoa!,
      saldo: this.saldo,
      limiteSaqueDiario: this.limiteSaqueDiario,
      flagAtivo: this.flagAtivo,
      tipoConta: this.tipoConta,
      dataCriacao: this.dataCriacao.toISOString(),
    });
  }
}

export default ContaModel;
