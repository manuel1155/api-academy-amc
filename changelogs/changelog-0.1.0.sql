--liquibase formatted sql

--changeset dpuc:1
create table ping (
  id int primary key auto_increment,
  created_at datetime default current_timestamp,
  user_agent varchar(128),
  remote_address varchar(128)
);
--rollback drop table ping;