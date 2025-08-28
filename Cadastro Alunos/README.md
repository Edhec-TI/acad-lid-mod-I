# Academia de Líderes - Cadastro de Alunos

## Visão Geral do Projeto

Este projeto consiste em uma aplicação web desenvolvida para a Academia de Líderes, focada no registro e gerenciamento de alunos. A plataforma permite a inserção de novos participantes no sistema, garantindo que seus dados sejam armazenados de forma segura e estruturada para serem utilizados em outras aplicações do ecossistema, como os pré e pós testes.

## Autor

*   **Fabio Costa - Analista de Dados EDhec**

## Tecnologias Utilizadas

A aplicação foi construída com as seguintes tecnologias:

*   **React:** Biblioteca para construção da interface de usuário.
*   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
*   **Vite:** Ferramenta de build e desenvolvimento front-end de alta performance.
*   **Tailwind CSS:** Framework de estilização CSS "utility-first".
*   **shadcn/ui:** Biblioteca de componentes de UI.
*   **Supabase:** Plataforma open-source para backend, utilizada para o banco de dados.
*   **React Hook Form:** Biblioteca para gerenciamento de formulários.
*   **React Router DOM:** Biblioteca para o gerenciamento de rotas.

## Como Executar o Projeto Localmente

Para rodar este projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos:

*   Node.js (versão 18 ou superior)
*   npm ou Yarn

### Passos:

1.  **Navegue até o diretório do projeto.**
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Configuração do Supabase (Variáveis de Ambiente):**
    Este projeto utiliza variáveis de ambiente para se conectar ao Supabase. Crie um arquivo `.env` na raiz do projeto e insira suas credenciais do Supabase:
    ```
    VITE_SUPABASE_URL=SUA_URL_DO_SUPABASE
    VITE_SUPABASE_ANON_KEY=SUA_CHAVE_ANON_DO_SUPABASE
    ```
4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

Após executar esses comandos, a aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/
├── public/                # Arquivos públicos
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── ui/            # Componentes da biblioteca shadcn/ui
│   ├── hooks/             # Hooks customizados
│   ├── integrations/      # Integrações com serviços externos
│   │   └── supabase/      # Configuração do cliente e tipos do Supabase
│   ├── lib/               # Funções utilitárias
│   ├── pages/             # Páginas da aplicação
│   ├── App.tsx            # Componente raiz com as rotas
│   └── main.tsx           # Ponto de entrada da aplicação
├── package.json
└── vite.config.ts
```

## Licença

Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais informações.