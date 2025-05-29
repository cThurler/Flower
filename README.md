# Flower

# Ainda não há autenticação segura implementada, pois o projeto não possui backend.

Atualmente simula a autenticação e gerenciamento de usuários, o projeto utiliza uma API fake que salva e recupera os dados no **localStorage** do navegador.


Em desenvolvimento com 

- ## **React** 
- ## **TypeScript**
- ## **Tailwind CSS**

---

## Sobre a API fake

Para simular a autenticação e gerenciamento de usuários, o projeto utiliza uma API fake que salva e recupera os dados no **localStorage** do navegador.

- Os usuários são armazenados no localStorage sob a chave `taskflow_users`.
- Isso permite exemplificar o fluxo de login, registro e autenticação sem a necessidade de backend real.

---

## Como usar

1. Clonar e instalar dependências:

```bash
git clone <seu-repositorio-url>
cd taskflow
npm install
```

Iniciar aplicação em desenvolvimento:
```bash
npm run dev
```

Para testar o login, crie um usuário na tela de registro ou insira um usuário diretamente no localStorage via console do navegador:
```js
localStorage.setItem('taskflow_users', JSON.stringify([
  { username: 'usuarioTeste', password: 'senha123' }
]));
```
E depois faça login com:

Usuário: usuarioTeste
Senha: senha123