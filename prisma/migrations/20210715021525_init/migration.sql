-- CreateTable
CREATE TABLE "Pessoas" (
    "idPessoa" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("idPessoa")
);

-- CreateTable
CREATE TABLE "Contas" (
    "idConta" SERIAL NOT NULL,
    "idPessoa" INTEGER NOT NULL,
    "saldo" DECIMAL(65,30) NOT NULL,
    "limiteSaqueDiario" DECIMAL(65,30) NOT NULL,
    "flagAtivo" BOOLEAN NOT NULL,
    "tipoConta" INTEGER NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("idConta")
);

-- CreateTable
CREATE TABLE "Transacoes" (
    "idTransacao" SERIAL NOT NULL,
    "idConta" INTEGER NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "dataTransacao" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("idTransacao")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contas.idPessoa_unique" ON "Contas"("idPessoa");

-- AddForeignKey
ALTER TABLE "Contas" ADD FOREIGN KEY ("idPessoa") REFERENCES "Pessoas"("idPessoa") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transacoes" ADD FOREIGN KEY ("idConta") REFERENCES "Contas"("idConta") ON DELETE CASCADE ON UPDATE CASCADE;
