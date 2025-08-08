create database feedback_system_db;

use feedback_system_db;
    
       create table admin(
	admin_id int primary key AUTO_INCREMENT,
	email varchar(255),
	password varchar(255));




    create table teacher(
	teacher_id int primary key AUTO_INCREMENT,
	first_name varchar(255),
	last_name varchar(255),
	email varchar(255),
	password varchar(255));


    create table student(
	student_id int primary key AUTO_INCREMENT,
	first_name varchar(255),
	last_name varchar(255),
	email varchar(255),
	password varchar(255),
	prn_no int,
	group_id int,
	course_id int );

    	create table module_type(
	module_type_id int primary key AUTO_INCREMENT,
	module_type_name varchar(255));

   	create table course_group(
	group_id int primary key AUTO_INCREMENT,
	group_name varchar(255),
	course_id int);

    	create table module(
	module_id int primary key AUTO_INCREMENT,
	module_name varchar(255),
	course_id int);


    	create table course(
	course_id int primary key AUTO_INCREMENT,
	course_name varchar(255));

    create table feedback_schedule(
	feedback_schedule_id int primary key AUTO_INCREMENT,
	teacher_id int,
	module_id int,
	module_type_id int,
	group_id int,
	course_id int,
	start_time DATETIME,
	end_time   DATETIME ,is_active int(1) default 1
);



    create table question(
        question_id int primary key AUTO_INCREMENT,
        q1 int,
        q2 int,
        q3 int,
        q4 int,
        q5 int,
        suggestion text
    );


    create table feedback(
        feedback_id int primary key AUTO_INCREMENT,
        student_id int,
        feedback_schedule_id int,
        question_id int
    );


insert into course(course_name) values("PG-DAC");
insert into course(course_name) values("PG-DMC");
insert into course(course_name) values("PG-DESD");
insert into course(course_name) values("PG-DBDA");
insert into course(course_name) values("PG-DITISS");


insert into course_group(group_name,course_id) values ("D1" ,"1");
insert into course_group(group_name,course_id) values ("D2" ,"1");
insert into course_group(group_name,course_id) values ("D3" ,"1");
insert into course_group(group_name,course_id) values ("D4" ,"1");
insert into course_group(group_name,course_id) values ("D5" ,"1");

insert into course_group(group_name,course_id) values ("W1" ,"2");
insert into course_group(group_name,course_id) values ("W2" ,"2");
insert into course_group(group_name,course_id) values ("W3" ,"2");

insert into course_group(group_name,course_id) values ("E1" ,"3");
insert into course_group(group_name,course_id) values ("E2" ,"3");
insert into course_group(group_name,course_id) values ("E3" ,"3");

insert into course_group(group_name,course_id) values ("B1" ,"4");
insert into course_group(group_name,course_id) values ("B2" ,"4");
insert into course_group(group_name,course_id) values ("B3" ,"4");

insert into course_group(group_name,course_id) values ("I1" ,"5");
insert into course_group(group_name,course_id) values ("I2" ,"5");
insert into course_group(group_name,course_id) values ("I3" ,"5");

insert into module_type(module_type_name) values("Offline Mid Module Theory");
insert into module_type(module_type_name) values("Offline End Module Theory");
insert into module_type(module_type_name) values("Offline Mid Module Lab");
insert into module_type(module_type_name) values("Offline End Module Lab");



insert into module(module_name,course_id) values("C++ Programming",1);

insert into module(module_name,course_id) values("Concepts of Operating System & Software Development Methodologies",1);

insert into module(module_name,course_id) values("Object Oriented Programming with Java",1);


insert into module(module_name,course_id) values("Algorithms and Data Structures (Using Java)",1);

insert into module(module_name,course_id) values("Database Technologies",1);

insert into module(module_name,course_id) values("Web Programming Technologies",1);

insert into module(module_name,course_id) values("Web Based Java Programming",1);

insert into module(module_name,course_id) values("Microsoft .Net Technologies ",1);

insert into module(module_name,course_id) values("General Aptitude & Effective Communication",1);

insert into module(module_name,course_id) values("Project",1);




insert into module(module_name,course_id) values("OS Concepts and Linux Programming",2);

insert into module(module_name,course_id) values("Introduction to DBMS",2);

insert into module(module_name,course_id) values("Object Oriented Programming with Java",2);

insert into module(module_name,course_id) values("Algorithm & Data Structures Using Java",2);

insert into module(module_name,course_id) values("Web-Based Java Programming",2);

insert into module(module_name,course_id) values("Mobile Programming",2);

insert into module(module_name,course_id) values("Hybrid Mobile Apps Programming",2);

insert into module(module_name,course_id) values("AI on Mobile Platforms",2);

insert into module(module_name,course_id) values("Aptitude and Effective Communication",2);

insert into module(module_name,course_id) values("Projects",2);





insert into module(module_name,course_id) values("Embedded C Programming",3);

insert into module(module_name,course_id) values("Data Structures and Algorithms",3);

insert into module(module_name,course_id) values("Microcontroller Programming and Interfacing",3);

insert into module(module_name,course_id) values("Embedded Operating Systems",3);

insert into module(module_name,course_id) values("Embedded Device Drivers",3);

insert into module(module_name,course_id) values("Real-time Operating Systems",3);

insert into module(module_name,course_id) values("Internet of Things (IoT) ",3);

insert into module(module_name,course_id) values("Aptitude & Effective Communication",3);

insert into module(module_name,course_id) values("Project and Seminar",3);






insert into module(module_name,course_id) values("Linux Programming and Cloud Computing",4);

insert into module(module_name,course_id) values("Python and R Programmin",4);

insert into module(module_name,course_id) values("Java Programming",4);

insert into module(module_name,course_id) values("Advanced Analytics using Statistics",4);

insert into module(module_name,course_id) values("Data Collection & DBMS (Principles, Tools & Platforms)",4);

insert into module(module_name,course_id) values("Big Data Technologies",4);

insert into module(module_name,course_id) values("Data Visualization - Analysis and Reporting",4);

insert into module(module_name,course_id) values("Practical Machine Learning",4);

insert into module(module_name,course_id) values("Aptitude & Effective Communication",4);

insert into module(module_name,course_id) values("Project",4);




insert into module(module_name,course_id) values("Fundamental of Computer Networks",5);

insert into module(module_name,course_id) values("Concepts of Operating System and Administration",5);

insert into module(module_name,course_id) values("Security Concepts",5);

insert into module(module_name,course_id) values("Compliance Auditg",5);

insert into module(module_name,course_id) values("Network Defense and Countermeasures (NDC)",5);

insert into module(module_name,course_id) values("Cyber Forensics",5);

insert into module(module_name,course_id) values("Public Key Infrastructure",5);

insert into module(module_name,course_id) values("IT Infrastructure Management & DevOps",5);

insert into module(module_name,course_id) values("Aptitude & Effective Communications",5);




    create table teacher(
	teacher_id int primary key AUTO_INCREMENT,
	first_name varchar(255),
	last_name varchar(255),
	email varchar(255),
	password varchar(255));



	insert into teacher(first_name,last_name,email,password) values("Manjusha","Nikam","manjusha@gmail.com","1234");
	







