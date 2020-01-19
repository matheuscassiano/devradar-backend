# Backend 
Backend programado em NodeJS para o preojeto da Semana Omnistack, DevEncontrar. Esta parte do projeto é uma RestAPI onde deve ser possivel cadastrar, listar e procurar os desenvolvedores que estão perto de você e/ou que trabalham com as mesmas tecnologías que você. Sendo util para empresas e contratantes que precisão de pessoas para proseguir com seus projetos.

## Detalhes

### Banco de Dados
O Banco de dados utilizado neste projeto é um banco de dados não-relacional, o MongoBD. Escolhida por sua facilidade de utilização e por oferecer um armazenamento em nuvem de 512mb, o que é mais do que o suficiente para uma aplicação que não irá armazenar medias <i>- como videos, audios e imagens -</i> sendo completamente gratuito e pratico.

### Arquitetura
O projeto leva em conta partes da arquitetura MVC, <i> Model, View, Controller</i>, chegando a utilizar somente Models e Controller, já que a parte de View será emplementada na utilização do ReactJS e do React Nativa no Frontend da aplicação. 

### Bibliotecas
São poucas as bibliotecas importadas, sendo elas o Express para configuração de rotas, Axios para utilização de dados da API do GitHub, e Mogoose para a estruturação do banco de dados MongoDB. Para desenvolvimento foi instalda a biblioteca Nodemon para facilitar o desenvolvimento sem ter que reiniciar o servidor à cada atualização.

## Imagens