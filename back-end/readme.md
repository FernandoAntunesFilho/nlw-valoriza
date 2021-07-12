# Sistema de Elogios

## Rotas
* POST `/user`: Será usado para criar novos usuários no Banco de Dados.</br>
Deve ser informado no _Body_ da requisição os seguintes dados no formato JSON:
```json
{
    "name": "Name",
    "email": "email@email.com",
    "password": "senha",
    "admin": false
}
```
A chave admin deve ter o valor `true` caso deseje cadastrar um usuario admin.</br>
A resposta em caso de sucesso será:
```json
{
    "id": 12,
    "name": "Name",
    "email": "email@email.com",
    "password": "$2a$08$ywdaiWukbmhTT4aVaXesDuWHzXqIMNLEFWV16LMrdkKkk.Zihk4am",
    "admin": false,
    "updatedAt": "2021-07-12T20:31:36.333Z",
    "createdAt": "2021-07-12T20:31:36.333Z"
}
```
Em caso de falha, as respostas seguirão este padrão:
```json
{
    "message": "Email incorreto"
}

{
    "message": "Email email@email.com já existe"
}
```
* GET `/user`: Gera uma lista com todos os usuários cadastrados no Banco de Dados.</br>
ATENÇÃO para as regras: Somente usuário logado com perfil de admin pode gerar a lista. Para isso deve ser informado em _Headers_ a chave _Authorization_ com o token do usuário.</br>
Em caso de sucesso, a resposta será neste padrão:
```json
[
    {
        "id": 2,
        "name": "Name01",
        "email": "name01@email.com",
        "createdAt": "2021-06-24T12:23:03.000Z",
        "updatedAt": "2021-06-24T12:23:03.000Z"
    },
    {
        "id": 11,
        "name": "Name02",
        "email": "name02@email.com",
        "createdAt": "2021-06-24T12:24:00.000Z",
        "updatedAt": "2021-06-24T12:24:00.000Z"
    },
]
```
Esta lista estará em ordem alfabética por nomes.</br>
E em casos de falha, a resposta seguirá este padrão:
```json
{
    "error": "Unauthorized"
}

{
    "error": "invalid signature"
}
```

* POST `/user/compliment/receive`: Retorta uma lista com todos os elogios recebidos pelo usuário. É necessário estar logado para ter acesso à lista.</br>
Deve ser informado em _Headers_ a chave _Authorization_ com o token do usuário.</br>
Esta lista tem o seguinte padrão de resposta:
```json
[
    {
        "id": 2,
        "message": "Esta semana foi só sucesso :D",
        "createdAt": "2021-06-25T12:19:24.000Z",
        "sender": {
            "name": "User Sender"
        },
        "tag": {
            "name": "Talentoso"
        }
    },
]
```
E em casos de falha, a resposta seguirá este padrão:
```json
{
    "error": "invalid signature"
}
```
* POST `/user/compliment/send`: Retorta uma lista com todos os elogios enviados pelo usuário. É necessário estar logado para ter acesso à lista.</br>
Deve ser informado em _Headers_ a chave _Authorization_ com o token do usuário.</br>
Esta lista tem o seguinte padrão de resposta:
```json
[
    {
        "id": 1,
        "message": "Você tem muito futuro!!!",
        "createdAt": "2021-06-25T12:17:28.000Z",
        "receiver": {
            "name": "User Receiver"
        },
        "tag": {
            "name": "Fenomenal"
        }
    },
]
```
E em casos de falha, a resposta seguirá este padrão:
```json
{
    "error": "invalid signature"
}
```

* POST `/tag`: Deve ser usado para cadastrar uma nova tag.</br>
Deve ser informado no _Body_ da requisição o seguinte dado no formato JSON:
```json
{
    "name": "New Tag",    
}
```
Somente usuário logado com perfil de admin pode gerar a lista. Para isso deve ser informado em _Headers_ a chave _Authorization_ com o token do usuário.</br>
Em caso de sucesso, a resposta padrão será esta:
```json
{
    "id": 8,
    "name": "New Tag",
    "updatedAt": "2021-07-12T21:28:20.134Z",
    "createdAt": "2021-07-12T21:28:20.134Z"
}
```
E em casos de falha, a resposta seguirá este padrão:
```json
{
    "error": "invalid signature"
}
```

* GET `/tag`: Retorna uma lista com todas as Tags cadastradas no Banco de Dados. É necessário estar logado para ter acesso à lista.</br>
Deve ser informado em _Headers_ a chave _Authorization_ com o token do usuário.</br>
```json
[
    {
        "id": 1,
        "name": "Fenomenal"
    },
    {
        "id": 2,
        "name": "Talentoso"
    }
]
```
A lista estará em ordem alfabética.</br>
E em casos de falha, a resposta seguirá este padrão:
```json
{
    "error": "invalid signature"
}
```
* POST `/login`: Usado para autenticar um usuário e gerar seu token.</br>
Deve ser informado no _Body_ da requisição os seguintes dados no formato JSON:
```json
{
    "email": "email@email.com",
    "password": "senha",
}
```
Em caso de sucesso será retornado o token neste padrão:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyLnVzZXJAbmx3LmNvbSIsImlhdCI6MTYyNjEyNTI3OCwiZXhwIjoxNjI2MjExNjc4LCJzdWIiOiIxIn0.xPwDUOS2b4oyrrLgrEqQGxV6wuO53OSIytrHJRp_hc4"
}
```
Em caso de falha, a resposta seguirá este padrão:
```json
{
    "message": "Email ou Senha incorreto"
}
```

* POST `/compliment`: Deve ser usado para registrar um novo elogio no Banco de Dados.</br>
O usuário deve estar autenticado para conseguir registrar o elogio.
Deve ser informado em _Headers_ a chave _Authorization_ com o token do usuário.</br>
Deve ser informado no _Body_ da requisição os seguintes dados no formato JSON:
```json
{
    "userReceiver": 2,
    "tagId": 8,
    "message": "Uma mensagem de elogio"
}
```
Em caso de sucesso, a resposta será:
```json
{
    "id": 86,
    "userReceiver": 2,
    "tagId": 8,
    "message": "Uma mensagem de elogio",
    "userSender": "11",
    "updatedAt": "2021-07-12T21:42:26.103Z",
    "createdAt": "2021-07-12T21:42:26.103Z"
}
```
Em caso de falha, a resposta seguirá este padrão:
```json
{
    "message": "Usuários inválidos"
}
```