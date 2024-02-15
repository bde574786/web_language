create database web_db;
use web_db;

create table user(
	id char(255),
    password char(255)
);

desc user;

insert into user(id, password) values('bde574786', '1234');

select * from user;


