# Painel de Permissões

Frontend demonstrativo para atribuição de permissões por **usuário + sistema**, inspirado na referência fornecida.

## Stack

- Angular 22.2.0
- Tailwind CSS 4.1
- Zard UI / estrutura preparada para os componentes locais do Zard CLI
- Lucide Angular para ícones SVG leves
- Standalone Components + Signals
- Mobile First

Angular 22.2.0 e Tailwind CSS 4 são usados no projeto. O Zard UI atualmente trabalha com Tailwind v4 e utiliza CLI para adicionar componentes ao projeto.

## Executar

```bash
npm install
npm start
```

Depois acesse `http://localhost:4200`.

## Login de demonstração

```text
E-mail: admin@prefeitura.gov.br
Senha: 123456
```

O painel inicia bloqueado. Somente o perfil no cabeçalho fica disponível. Depois do login, filtros e cards de sistemas são liberados.

## Fluxo implementado

1. Dashboard inicia bloqueado.
2. Clique no perfil no cabeçalho.
3. Modal de login é exibido.
4. Login válido libera a interface.
5. Usuário, secretaria e local podem ser filtrados.
6. Cada sistema possui seu mock de permissões.
7. A seleção da permissão atualiza o estado local da tela.
8. Logout volta o painel para o estado bloqueado.

## Estrutura

```text
src/app/
├── core/
│   ├── config/
│   ├── enums/
│   └── models/
├── features/
│   ├── auth/
│   │   ├── components/login-modal/
│   │   └── mocks/
│   ├── dashboard/
│   │   ├── components/
│   │   └── pages/dashboard/
│   └── systems/
│       ├── ponto-eletronico/
│       ├── sgi-dom/
│       ├── sgi-protocolo/
│       ├── sgi-almoxarifado/
│       ├── sis-atendimento/
│       ├── estatisticas-transito/
│       ├── fala-cidadao/
│       ├── sistema-gestor-a/
│       ├── sistema-gestor-b/
│       ├── sistema-gestor-c/
│       └── systems.mock.ts
├── shared/
│   └── components/
├── assets/
└── environments/
```

Os módulos de cada sistema possuem seus próprios mocks-base para permitir que, futuramente, cada integração cresça de forma isolada sem transformar o dashboard em um componente monolítico.

## Zard UI

O Zard UI atual é distribuído via CLI e adiciona componentes ao código local do projeto. Este projeto mantém `components.json` preparado para a estrutura de aliases do Zard.

Para adicionar componentes oficiais do Zard posteriormente:

```bash
npx zard-cli@latest init
npx zard-cli@latest add button card dialog badge input select
```

Os componentes compartilhados deste MVP são locais, standalone e estilizados com os mesmos tokens/abordagem do Zard UI, evitando dependência de backend e mantendo o projeto simples de evoluir.

## Próximo passo natural

Quando o backend existir, o estado dos mocks pode ser substituído por services por feature sem precisar alterar a estrutura visual do dashboard.
