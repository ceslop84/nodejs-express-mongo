# nodejs-express-mongo

Curso Alura: https://cursos.alura.com.br/course/node-js-api-rest-express-mongodb

# Lógicas de rotas:

Durante o desenvolvimento vimos na prática dois componentes-chave no desenvolvimento de uma API REST: models e controllers.

Quando desenvolvemos uma aplicação, seja uma API REST como a nossa livraria ou outros tipos de API, é normal organizarmos o código em “camadas”, ou seja, em conjuntos de código separados de acordo com sua função.

As possibilidades de organização do código em camadas dentro de uma aplicação são inúmeras e fazem parte de grandes áreas de estudo dentro da programação, como a arquitetura de software.

Para nossa livraria, escolhemos como base um dos modelos clássicos de arquitetura para APIs REST, que é o MVC ou Model-View-Controller. Neste curso, utilizaremos uma forma mais simplificada do MVC e não abordaremos o view, que é a camada de visualização dos dados.

Agora que implementamos nossos primeiros models e controllers, vamos entender mais sobre o papel de cada um desses componentes.

## Models

Os models são responsáveis pela representação dos dados e da lógica de negócio da aplicação, ou seja, é responsabilidade do model gerenciar o relacionamento entre a API e a camada de dados, incluindo validação, armazenamento e manipulação dos dados, interação com a base de dados e suas regras.

Em nossa API, a conexão entre o model e o banco de dados está sendo feito através dos métodos da biblioteca Mongoose, como no exemplo abaixo:

Nossa API utiliza um banco MongoDB e a biblioteca Mongoose, então o código que escrevemos para criar o modelo utiliza a “sintaxe” da biblioteca. O código utilizado para definir um model varia de acordo com as diversas bibliotecas e frameworks que podem ser utilizados em uma API.

## Controllers

Os controllers atuam como intermediários entre a camada responsável pelo recebimento dos inputs de dados, que em nossa API está sendo feito através das rotas, e os models. Controllers também são a camada responsável pelo “caminho inverso”, pegando o resultado do processamento feito pelos models e “repassando” de volta.

Uma forma simplificada de ilustrar a integração entre as camadas da nossa API pode ser conferida neste diagrama:

alt: Fluxograma de integração das camadas de uma API, no sentido da requisição HTTP até o banco de dados. A requisição HTTP é enviada para a rota /livros, que chama o controller repassando os dados da requisição para o controller Livro que processa a requisição e chama o modelo em model Livro e conecta com o banco de dados e processa a query.

Na imagem acima, ilustramos o fluxo da API REST usando o modelo MVC, desde a requisição HTTP até a consulta (query) feita ao banco de dados.

A comunicação entre as camadas de model e controller é uma caminho de ida e volta, pois o model vai repassar o resultado da consulta para o controller para que seja processada e transformada na resposta HTTP no formato adequado e com as informações esperadasalt: Fluxograma de integração das camadas de uma API, no sentido do banco de dados até a resposta HTTP. O resultado da query com os dados vão do banco de dados até o model Livro, que processa o resultado e repassa para o controller Livro que recebe os dados e monta a resposta HTTP.

Para além do MVC, os conceitos de model e controller são amplamente usados em programação web, assim como a implementação e utilização de cada uma destas camadas. Você vai praticar mais com a arquitetura MVC nos próximos cursos da formação e terá contato com os models e os controllers em diversos outros tipos de API.

![](./img/MVC-routes_forward.png).

![](./img/MVC-routes_backward.png).
