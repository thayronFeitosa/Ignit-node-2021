# Ignit-node-2021

  ## Diagrama do projeto
  <img alt="Made by Rocketseat" src="img/diagram-aplication.png">

  ## Iniciando o projeto
  Baixando as dependencias do projeto
  ```ts
  yarn install
  ```
  ### Subindo o banco de dados
  Para que o projeto funcione é necessário que tenho o banco rentalx criado.

  **Obs: Banco de dados postgres**

  - Usando o docker
  
  Se tiver o docker instalado no computador basta rodar o comando

  ```ts
  docker-compose up --force-recreate
  ```
  Com o banco de dados criado, basta rodar o comando para criar as tabelas do bando
  ```ts
  yarn typeorm migration:run
  ```

  ***
  <h1>Application</h1>