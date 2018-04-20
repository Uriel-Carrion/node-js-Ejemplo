create database new_portal;

use new_portal;

create table news(
	id_news int not null primary key auto_increment,
	title varchar(45),
	news text,
	data_created timestamp default current_timestamp
);

insert into news(title, news) values ('my title','content of the news');

select * from news;	