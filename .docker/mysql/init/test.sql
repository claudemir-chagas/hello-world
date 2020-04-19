# create test database
CREATE DATABASE IF NOT EXISTS `test`;

# grant rights
GRANT ALL ON `test`.* TO 'test'@'%';
