## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)
- [npm](https://www.npmjs.com/)

## Configuração do Ambiente

1. **Defina as credenciais do banco de dados**

   Copie o arquivo `.env.example` para `.env` e preencha as variáveis de ambiente com suas credenciais do PostgreSQL:

   ```sh
   cp example.env .env
   # Edite o arquivo .env conforme necessário
   ```

2. **Suba o banco de dados com Docker**

   Inicie o container do PostgreSQL:

   ```sh
   docker-compose up -d
   ```

3. **Instale as dependências**

   ```sh
   npm install
   ```

4. **Gere o client do Prisma**

   ```sh
   npm run db:generate
   ```

5. **Configure o schema do banco**

   Edite o arquivo [`prisma/schema.prisma`](prisma/schema.prisma) para definir suas tabelas e modelos.

6. **Execute as migrações para criar as tabelas**

   ```sh
   npm run db:migrate
   ```

## Rodando o Projeto

- **Modo desenvolvimento:**

  ```sh
  npm run dev
  ```

- **Build para produção:**

  ```sh
  npm run build
  npm start
  ```

## Estrutura do Projeto

```
.
├── prisma/
│   ├── schema.prisma
│   └── generated/
├── src/
│   ├── controllers/
│   ├── database/
│   ├── middlewares/
│   ├── routes/
│   └── utils/
├── .env
├── docker-compose.yaml
├── package.json
└── readme.md
```

## Comandos Úteis

- Gerar client do Prisma: `npm run db:generate`
- Rodar migrações: `npm run db:migrate`
- Subir banco de dados: `docker-compose up -d`

---

Nota: O adaptador postgres não está como dependência de desenvolvimento pois não sei se é necessário em runtime
