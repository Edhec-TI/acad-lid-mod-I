# Plataforma de Busca de Certificados Digitais

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

## ❯ Visão Geral

Esta aplicação web fornece uma interface moderna e eficiente para a busca e visualização de certificados digitais. Desenvolvida para os participantes do treinamento "Academia de Líderes Módulo III", a plataforma permite que os usuários encontrem e baixem seus certificados de conclusão de forma rápida e intuitiva.

A arquitetura do projeto é baseada em componentes reutilizáveis, utilizando as melhores práticas de desenvolvimento front-end para garantir escalabilidade e manutenibilidade.

## ✨ Funcionalidades

- **Busca Dinâmica:** Filtra os resultados em tempo real conforme o usuário digita o nome.
- **Visualização em Modal:** Exibe os detalhes do certificado e uma miniatura do PDF em um modal interativo, sem a necessidade de sair da página.
- **Visualizador de PDF Integrado:** Permite a visualização completa do certificado diretamente no navegador.
- **Download Direto:** Oferece um link para download do certificado em formato PDF.
- **Design Responsivo:** Interface totalmente adaptável para dispositivos móveis e desktops.

## 🛠️ Stack de Tecnologias

A aplicação foi construída utilizando um conjunto de tecnologias modernas e robustas:

- **Framework Front-end:** [React](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes de UI:** [shadcn/ui](https://ui.shadcn.com/)
- **Backend-as-a-Service (BaaS):** [Supabase](https://supabase.com/) (para banco de dados e armazenamento)
- **Gerenciamento de Estado Assíncrono:** [TanStack Query](https://tanstack.com/query/latest)
- **Roteamento:** [React Router](https://reactrouter.com/)

## 🚀 Começando

Siga os passos abaixo para configurar e executar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- Um gerenciador de pacotes como `npm`, `yarn` ou `bun`.

### Instalação

1.  Instale as dependências do projeto:
    ```bash
    npm install
    ```
    ou
    ```bash
    yarn install
    ```
    ou
    ```bash
    bun install
    ```

### Configuração de Variáveis de Ambiente

1.  Crie um arquivo `.env` na raiz do projeto, copiando o exemplo do `.env.example` (se existir).
2.  Adicione as seguintes variáveis de ambiente com as suas credenciais do Supabase:

    ```env
    VITE_SUPABASE_URL="SUA_URL_DO_PROJETO_SUPABASE"
    VITE_SUPABASE_PUBLISHABLE_KEY="SUA_CHAVE_PUBLIC_SUPABASE"
    ```

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes scripts:

- `npm run dev`: Inicia o servidor de desenvolvimento com Hot Reload.
- `npm run build`: Compila a aplicação para produção na pasta `dist`.
- `npm run lint`: Executa o linter (ESLint) para análise estática do código.
- `npm run preview`: Inicia um servidor local para visualizar a build de produção.

## 📂 Estrutura do Projeto

A estrutura de pastas segue uma abordagem modular e organizada para facilitar a navegação e o desenvolvimento:

```
/
├── public/          # Ativos estáticos
├── src/
│   ├── components/  # Componentes React reutilizáveis (incluindo UI da shadcn)
│   ├── hooks/       # Hooks customizados
│   ├── integrations/# Integração com serviços (Supabase)
│   ├── lib/         # Funções utilitárias (ex: cn da shadcn)
│   ├── pages/       # Componentes de página
│   ├── services/    # Lógica de acesso a dados
│   └── utils/       # Funções utilitárias gerais
├── supabase/        # Configurações e migrações do Supabase
└── ...              # Arquivos de configuração (vite, tailwind, tsconfig, etc.)
```

## 👤 Autor

Este projeto foi desenvolvido por **Fabio Costa - Analista de Dados EDHEC**.

---

Feito com ❤️ e código.