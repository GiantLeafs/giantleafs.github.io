Приложение запускается с помощью сервера на Apache с использованием СУБД MySQL. Для его работы необходимо создать базу данных с названием XO и таблицу users в ней, SQL код:

CREATE TABLE `users` (
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `surname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL
)