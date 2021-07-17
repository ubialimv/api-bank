import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import Pessoa from '../../../../../domain/modules/pessoa/entities/pessoa.entity';

@Entity('pessoas')
class PessoaModel {
  @PrimaryGeneratedColumn()
  readonly idPessoa?: number;

  @Column()
  readonly nome!: string;

  @Column()
  readonly cpf!: string;

  @Column()
  readonly dataNascimento!: Date;

  constructor(
    nome: string,
    cpf: string,
    dataNascimento: Date,
    idPessoa?: number,
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.idPessoa = idPessoa;
  }

  static from(domain: Pessoa): PessoaModel {
    return new PessoaModel(
      domain.nome,
      domain.cpf,
      domain.dataNascimento,
      domain.idPessoa,
    );
  }

  toDomain(): Pessoa {
    return new Pessoa({
      idPessoa: this.idPessoa,
      nome: this.nome,
      cpf: this.cpf,
      dataNascimento: this.dataNascimento,
    });
  }
}

export default PessoaModel;
