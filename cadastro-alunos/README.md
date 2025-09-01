# Academia de Líderes - Cadastro de Alunos

## Visão Geral do Projeto

Este projeto consiste em uma aplicação web desenvolvida para a Academia de Líderes, focada no registro e gerenciamento de alunos. A plataforma permite a inserção de novos participantes no sistema, garantindo que seus dados sejam armazenados de forma segura e estruturada para serem utilizados em outras aplicações do ecossistema, como os pré e pós testes.

## Autor

*   **Fabio Costa - Analista de Dados EDhec**

## Tecnologias Utilizadas

A aplicação foi construída com as seguintes tecnologias:

*   **React:** Biblioteca para construção da interface de usuário.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática para o frontend.
*   **Vite:** Ferramenta de build e desenvolvimento front-end de alta performance.
*   **Vercel Serverless Function:** Função backend (Node.js) para comunicação segura com o banco de dados.
*   **Tailwind CSS:** Framework de estilização CSS "utility-first".
*   **shadcn/ui:** Biblioteca de componentes de UI.
*   **Supabase:** Plataforma open-source para backend, utilizada para o banco de dados.
*   **React Hook Form:** Biblioteca para gerenciamento de formulários.
*   **React Router DOM:** Biblioteca para o gerenciamento de rotas.

## Arquitetura de Backend com Função Serverless

Para garantir a segurança e a integridade dos dados, este projeto implementa uma função serverless (localizada em `api/alunos.js`) que atua como um intermediário seguro entre o frontend e o banco de dados Supabase.

### Melhorias e Benefícios

- **Segurança Aprimorada:** A principal vantagem desta abordagem é que as credenciais de acesso ao Supabase (URL e chave de API) não ficam expostas no código do frontend (que é executado no navegador do usuário). Em vez disso, elas são armazenadas de forma segura como **variáveis de ambiente** no servidor da Vercel.
- **Prevenção de Acesso Não Autorizado:** O frontend não se comunica diretamente com o banco de dados. Ele envia os dados do formulário para a função serverless, e é a função que, do lado do servidor, realiza a inserção ou atualização no Supabase. Isso impede que usuários mal-intencionados possam pegar as credenciais no código e tentar manipular o banco de dados diretamente.
- **Centralização da Lógica de Negócio:** A lógica para verificar se um aluno já existe e decidir entre atualizar ou inserir um novo registro está centralizada na função serverless, tornando o sistema mais robusto e fácil de manter.

## Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos:

*   Node.js (versão 20 ou superior, para ser compatível com o ambiente Vercel)
*   Vercel CLI: `npm install -g vercel`
*   npm ou Yarn

### Passos:

1.  **Navegue até o diretório do projeto.**
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Configuração da Função Serverless (Variáveis de Ambiente):**
    A função serverless precisa de acesso às credenciais do Supabase. Crie um arquivo `.env` na raiz do projeto e insira suas credenciais (sem o prefixo `VITE_`):
    ```
    SUPABASE_URL=SUA_URL_DO_SUPABASE
    SUPABASE_ANON_KEY=SUA_CHAVE_ANON_DO_SUPABASE
    ```
4.  **Inicie o servidor de desenvolvimento da Vercel:**
    Use o comando `vercel dev` para iniciar o servidor. Ele irá executar tanto o frontend Vite quanto a função serverless da pasta `api/`.
    ```bash
    vercel dev
    ```

Após executar esses comandos, a aplicação estará disponível em `http://localhost:3000` (ou outra porta indicada pela Vercel).

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/
├── api/
│   └── alunos.js        # Função Serverless para o backend
├── public/                # Arquivos públicos
├── src/                   # Código fonte do frontend
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── .env                   # Arquivo para variáveis de ambiente da API
├── package.json
└── vite.config.ts
```

## Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais informações.