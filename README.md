# Geo Location App
Este projeto é uma App baseado em Google Maps que coleta dados do usuário, cria uma API simples em REST e mostra lugares num raio escolhido pelo usuário.

Stack usado na aplicação:

## Client Side
> Create React App (React, Webpack, Autoprefixer, JSX, Babel)
> Redux
> Router
> SASS
> Bootstrap

## Server Side
> NodeJs
> Express
> Jade

## Database
> MongoDB

A documentação de cada componente registrada diretamente no código

## Como rodar o projeto

1. Faça o clone do projeto ou baixe o Zip na sua máquina (escolha um caminho de pasta sem espaços e caixa alta para evitar Warnings indesejados)

2. Abra um console e execute o comando para rodar o Mongo Daemon [baixe aqui](https://www.mongodb.com/download-center?jmp=nav#community), digite: 
```mongod```

3. Em um novo console, abra a pasta 'server' e digite:
```npm install```
```npm start```

4. Em um terceiro console, abra a pasta 'client' e digite
```npm install```
```npm start```

5. Para gerar o build, abra a pasta 'client' e digite
```npm build```

## Locais

> (localhost:3000)[localhost:3001/userlist] - Front-End

> (localhost:3001)[localhost:3001/userlist] - Back-End

> (localhost:3001/userlist)[localhost:3001/userlist] - API Rest

A interação do usuário vai gerar dados acessados pela API.

## Extra

> http://localhost:3000/users -Tabela com os dados de todas as interações dos usuários

