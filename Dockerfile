FROM node

WORKDIR /src/app

COPY package.json ./

RUN npm install

COPY . . 

EXPOSE 3333

CMD ["npm","run","dev"]

# Rodar no terminal: 
# >_ docker build -t rentx .

# Se eu rodar um "docker ps", veremos que nenhum conteiner estará rodando isso;
# porque o docker é uma espécie de máquina diferente da nossa e precisamos
# rodar: 
# >_ docker run -p 3333:3333 rentx

# Para verificar se conteiner realmente não está rodando na nossa máquina:
# >_ docker exec -it peaceful_ganguly /bin/bash
# Vamos ver que a aplicação está rodando no /src/app que determinamos.