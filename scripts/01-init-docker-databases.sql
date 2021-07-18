CREATE SEQUENCE public."pessoas_idPessoa_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE public.pessoas
(
    "idPessoa" integer NOT NULL DEFAULT nextval('"pessoas_idPessoa_seq"'::regclass),
    nome character varying COLLATE pg_catalog."default" NOT NULL,
    cpf character varying COLLATE pg_catalog."default" NOT NULL,
    "dataNascimento" timestamp without time zone NOT NULL,
    CONSTRAINT "pessoas_pk" PRIMARY KEY ("idPessoa")
)

TABLESPACE pg_default;

ALTER TABLE public.pessoas
    OWNER to postgres;

INSERT INTO public.pessoas (nome, cpf, "dataNascimento") VALUES ('ubialimv', '479.506.420-25', '1991-04-12');

CREATE SEQUENCE public."contas_idConta_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE public.contas
(
    "idConta" integer NOT NULL DEFAULT nextval('"contas_idConta_seq"'::regclass),
    saldo integer NOT NULL,
    "limiteSaqueDiario" integer NOT NULL,
    "flagAtivo" boolean NOT NULL,
    "tipoConta" integer NOT NULL,
    "dataCriacao" timestamp without time zone NOT NULL,
    "pessoaIdPessoa" integer,
    CONSTRAINT "conta_pk" PRIMARY KEY ("idConta"),
    CONSTRAINT "conta_pessoa_fk" FOREIGN KEY ("pessoaIdPessoa")
        REFERENCES public.pessoas ("idPessoa") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE public.contas
    OWNER to postgres;

CREATE SEQUENCE public."transacoes_idTransacao_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE public.transacoes
(
    "idTransacao" integer NOT NULL DEFAULT nextval('"transacoes_idTransacao_seq"'::regclass),
    "idConta" integer NOT NULL,
    valor integer NOT NULL,
    tipo character varying COLLATE pg_catalog."default" NOT NULL,
    "dataTransacao" timestamp without time zone NOT NULL,
    CONSTRAINT "transacao_pk" PRIMARY KEY ("idTransacao")
)

TABLESPACE pg_default;

ALTER TABLE public.transacoes
    OWNER to postgres;