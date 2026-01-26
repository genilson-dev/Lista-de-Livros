Examples

      Set up a new local Prisma Postgres `prisma dev`-ready project
      $ prisma init

      Start a local Prisma Postgres server for development
      $ prisma dev

      Generate artifacts (e.g. Prisma Client)
      $ prisma generate

      Browse your data
      $ prisma studio

      Create migrations from your Prisma schema, apply them to the database, generate artifacts (e.g. Prisma Client)   
      $ prisma migrate dev

      Pull the schema from an existing database, updating the Prisma schema
      $ prisma db pull

      Push the Prisma schema state to the database
      $ prisma db push

      Validate your Prisma schema
      $ prisma validate

      Format your Prisma schema
      $ prisma format

      Display Prisma version info
      $ prisma version

      Display Prisma debug info
      $ prisma debug


CREATE TABLE IF NOT EXISTS cliente(
	id_cliente INT PRIMARY KEY,
    nome VARCHAR(50) not null,
    cidade VARCHAR(50) NOT NULL,
    sexo CHAR(1),
    estado CHAR(2),
    estadoCivil CHAR(2)
);

CREATE TABLE IF NOT EXISTS carro(
	id_carro INT PRIMARY KEY,
    marca VARCHAR(50) not null,
    modelo VARCHAR(50) NOT NULL,
    valor FLOAT
);

CREATE TABLE IF NOT EXISTS aluguel(
    id_aluguel INT PRIMARY KEY,
    id_cliente INT NOT NULL,
    id_carro INT NOT NULL,
    data_aluguel INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente),
    FOREIGN KEY (id_carro) REFERENCES carro(id_carro)
);

# Rotas insonmia

