# api-rest para uso em parendizdo de nodeJS com Banco de dados PostgrSQL

Aplicação de testes para aprendizado e estudos do NodeJS com express

Este trabalho é o resultado de uma série de vídeo aulas gratuitas que esta disponibilizadas no canal do youtube <https://www.youtube.com/playlist?list=PLWgD0gfm500EMEDPyb3Orb28i7HK5_DkR>

Utilizamos nesta API-REST

* REQUERIMENTOS PARA RODAR O SISTEMA
  + NodeJS Version >=15
  + PostgreSQL Version >=13

COMANDO PARA RODAR O SISTEMA

* Acessar a pasta raiz do sistema e executar os seguintes comandos:
  + install dependencies
  + npm install

CONTAINERS NESCESSAIOS PARA RODAR O SISTEMA

* Crate a container postgres caso não tenha um container postgres:
* Baixar imagem oficial do postgreSQL:
* => docker pull postgres:latest

* Executar o container do postgrSQL
  + => docker run --name=postgreSQL-v13 -e POSTGRES_PASSWORD=yourSecretPassword -d postgres:latest
