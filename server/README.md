# Server
This directory contains the server side of the project, including database, built in Java using Spring boot.

### How to Run
In [db-chart-generator/server](db-chart-generator/server) directory, type `./gradlew build && java -jar build/libs/db-chart-generator.jar`.
Open [http://localhost:8080] to view it in the browser.

### Database
SQL database server is running on AWS RDS.

#### Credentials
Host URL: db-ezops.cehiv9m1bmcz.us-east-1.rds.amazonaws.com
Root password: ezopsezops
Username: admin
Password: ezopsezops

### Notes on search
Search feature uses lucene search supported by Hibernate([ https://hibernate.org/search/]).
At the starting of the application, indexes of Passenger entity are auto generated in db-chart-generator/server/data/lucene. Search includes all categories.

### Frameworks
The server side of the project is built using:
- Spring boot ([https://spring.io/])
- Hibernate ORM and Search ([http://hibernate.org/])
