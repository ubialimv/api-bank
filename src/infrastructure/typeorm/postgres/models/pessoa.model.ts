import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Conta from '../../../../domain/modules/conta/entities/conta.entity';
import Pessoa from '../../../../domain/modules/pessoa/entities/pessoa.entity';
import ContaModel from './conta.model';

@Entity('pessoas')
class PessoaModel {
  @PrimaryGeneratedColumn()
  idPessoa?: number;

  @Column()
  nome!: string;

  @Column()
  cpf!: string;

  @Column()
  dataNascimento!: Date;

  @OneToMany(() => ContaModel, (conta) => conta.pessoa)
  contas!: Conta[];

  static from(domain: Pessoa): PessoaModel {
    const newPessoaModel = new PessoaModel();

    newPessoaModel.nome = domain.nome;
    newPessoaModel.cpf = domain.cpf;
    newPessoaModel.dataNascimento = domain.dataNascimento;
    newPessoaModel.idPessoa = domain.idPessoa;

    return newPessoaModel;
  }

  toDomain(): Pessoa {
    return new Pessoa({
      idPessoa: this.idPessoa,
      nome: this.nome,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento.toISOString(),
    });
  }
}

export default PessoaModel;
