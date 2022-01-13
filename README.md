# Login PGE

Esse projeto foi construído utilizando os framework React e Node.js, e o banco de dados relacional, MySQL.

## Instalação e execução
Para instalação, faz-se necessário, no diretório _client_ executar o comando _npm install_ e em seguida _npm start_ para pôr em execução. O mesmo se faz necessário no diretório server.

Quanto ao banco de dados, no arquivo server/index.js são definidas as configurações de conexão de banco, no caso, link, usuário, senha e nome do banco. No meu caso, foi definido localmente, por isso faz-se necessário a configuração. 

Quanto ao SQL, deve-se ser criado o banco e as tabelas, que com os seguintes códigos SQL, pode-se fazer facilmente: 
```
CREATE SCHEMA `db` ;

CREATE TABLE `db2`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `level` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`));

```

Quanto as valores da tabela, existe um formulário comentado nomeado "form-cadastro" no arquivo client/app.js, que quando descomentado, permite ao usuário cadastrar um usuário para verificar o login. Outra forma de se adicionar um usuário é por comando SQL, que pode ser o seguinte:

```
INSERT INTO users (user, password, name, level) VALUES (user, password, name, level)

```
