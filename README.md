# 🏡 Okutambula - Plataforma de Compra, Venda e Aluguel de Casas

![Okutambula](https://github.com/gilson-leonel01/okutambula_website/blob/9bd48bb0b9f2856d41e4b62c8df3a9fc1bdd0a09/Desktop%20-%201.png)

## 📌 Visão Geral

**Okutambula** é uma plataforma fullstack desenvolvida para facilitar a compra, venda e aluguel de imóveis. Utilizando tecnologias modernas, proporciona uma experiência rápida e eficiente tanto para compradores quanto para vendedores.

## 🚀 Executando o Projeto

Siga as instruções abaixo para configurar e rodar o projeto localmente.

### 1️⃣ Clonando o Repositório

Primeiro, clone o repositório do projeto:

```sh
git clone https://github.com/gilson-leonel01/okutambula_website.git
cd okutambula_website
```

### 2️⃣ Configuração do Ambiente

#### Backend (Next.js, Prisma ORM, PostgreSQL)

##### 📌 Pré-requisitos:
- Node.js instalado (versão 16+ recomendada).
- PostgreSQL configurado.
- Criar um arquivo `.env` e adicionar as credenciais do banco de dados.

##### 📌 Configuração:

1. Instalar as dependências:
   ```sh
   npm install
   ```
2. Rodar as migrações do Prisma ORM:
   ```sh
   npx prisma migrate dev
   ```
3. Iniciar o backend:
   ```sh
   npm run dev
   ```

### 3️⃣ Frontend (React.js, Zod, ReactQuery/Router, Vite, Tailwind CSS, Lucide)

1. Acesse o diretório do frontend:
   ```sh
   cd frontend
   ```
2. Instalar as dependências:
   ```sh
   npm install
   ```
3. Iniciar o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

A aplicação estará disponível em para frontend: `http://localhost:3000` & backend: `http://localhost:3001`.

## 📝 Funcionalidades

- 📌 Cadastro e gerenciamento de imóveis.
- 📌 Filtros avançados para busca de casas.
- 📌 Integração com mapas para localização de imóveis.
- 📌 Painel de usuário para gerenciar compras, vendas e aluguéis.

## 🛠️ Tecnologias Utilizadas

### 🔹 Backend:
- Next.js
- Prisma ORM
- PostgreSQL

### 🔹 Frontend:
- React.js
- Vite
- React Router
- React Query
- Tailwind CSS
- Zod
- Lucide Icons

## 📌 Links úteis

- [Documentação do Next.js](https://nextjs.org/docs)
- [PostgreSQL](https://www.postgresql.org/)
- [Prisma ORM](https://www.prisma.io/docs)
- [React.js](https://reactjs.org/)

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o repositório.
2. Crie uma nova branch (`git checkout -b feature`).
3. Faça as alterações e commite (`git commit -m "nova feature"`).
4. Envie um pull request.

---

Desenvolvido com 💙 por [G!](https://github.com/gilson-leonel01) & [Yuran Simão](https://github.com/yuransimao)

