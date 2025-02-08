# 🏦 FRONT de Carteira Digital

Esta é a estrutura do Frontend para a aplicação de Carteira Digital, responsável por gerenciar transferências financeiras e autenticação de usuários. A aplicação oferece funcionalidades como cálculo de taxas com base em datas de agendamento, autenticação com JWT, e operações CRUD para transferências e usuários.

## 🛠️ Tecnologias Utilizadas

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular--Material-009688?style=for-the-badge&logo=angular-material&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Instruções para Rodar a Aplicação

1. Clone o repositório:
    ```bash
    git clone https://github.com/VitorPCaliman/carteira-digital-client.git
    cd carteira-digital
    ```

2. Instale as dependências:
    ```bash
    npm install
    
    ```

3. Execute a aplicação:
    ```bash
    npm start
    ```

4. Acesse o aplicativo em: `http://localhost:4200`.

## 📐 Decisões de Arquitetura

- **Componentização**: A aplicação foi dividida em componentes Angular reutilizáveis e isolados, como `nav-bar`, `transferencia-form` e `default-login-layout`.
- **Material Design**: Utilizamos Angular Material para garantir uma UI moderna e responsiva, facilitando o desenvolvimento de componentes de interface.
- **Tailwind CSS**: Para complementar o design e adicionar estilos utilitários rápidos, o Tailwind CSS foi integrado, permitindo maior controle sobre a aparência da aplicação.
- **Criação de Logo**: Um logo minimalista foi criado para personalizar a aplicação e reforçar a idéia de uma identidade visual.
- **Integração com a API REST**: O frontend se comunica diretamente com a API backend via HTTP utilizando o serviço `TransferenciaService`  criar e listar transferências.

## 🔒 Autenticação e Segurança

- **Autenticação JWT**: A aplicação implementa autenticação utilizando tokens JWT para proteger rotas sensíveis e restringir acessos não autorizados.
- **Proteção de Endpoints**: Rotas e URLs sensíveis são protegidas para evitar acessos não autenticados ou não autorizados, utilizando guards no Angular (`AuthGuard`).
- **Melhoria na Segurança**: Foi adicionado suporte a interceptadores para incluir tokens de autenticação em requisições HTTP de forma automática e segura.

## 📊 Modelos Utilizados

### Modelo de Transferência

| Campo               | Tipo     | Descrição                                        |
|---------------------|----------|--------------------------------------------------|
| `contaOrigem`       | `string` | Conta de onde sairá a transferência              |
| `contaDestino`      | `string` | Conta de destino da transferência                |
| `valorTransferencia`| `number` | Valor da transferência                           |
| `dataTransferencia` | `Date`   | Data da transferência                            |

### Modelo de Usuário

| Campo              | Tipo              | Descrição                      |
|--------------------|-------------------|--------------------------------|
| `id`               | `number`          | Identificador da conta         |
| `nome`             | `string`          | Nome do usuário                |
| `cpf`              | `string`          | cpf do usuário                 |
| `contaOrigem`      | `string`          | Número da conta do usuário     |
| `saldo`            | `string`          | Saldo total da conta do usuário|
| `email`            | `string`          | Email cadastrado do usupario   |
| `senha`            | `string`          | senha do usuário               |

## 💡 Melhorias e Próximos Passos

1. **Notificações em Tempo Real**: Implementar uma funcionalidade de notificações para alertar os usuários sobre o status das transferências.
2. **Testes Automatizados**: Expandir os testes de unidade e integração utilizando Jasmine e Karma.
3. **Gerenciamento de Erros**: Melhorar o feedback ao usuário em casos de falhas, como tempo de resposta excedido ou erros inesperados.
4. **Melhorias na UI**: Adicionar animações com Tailwind e Angular Animations para melhorar a experiência do usuário.
5. **PWA**: Transformar a aplicação em uma Progressive Web App para suporte offline e maior performance.

---
