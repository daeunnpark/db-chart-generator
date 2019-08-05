## Server 
This directory contains the server side of the project, including database, built in Java using Spring boot.


## How to Run
Type `./gradlew build && java -jar build/libs/db-chart-generator.jar` in the ./server directory.
Open your browser and go to [localhost:8080].

### Search
Search feature uses lucene search supported by Hibernate([ https://hibernate.org/search/]).
At the starting of the application, indexes of Passenger entity are auto generated in db-chart-generator/server/data/lucene. Search includes all categories.

### Database
The SQL database server is running on AWS RDS.

#### Credentials
Host URL: db-ezops.cehiv9m1bmcz.us-east-1.rds.amazonaws.com
Root password: ezopsezops
Username: admin
Password: ezopsezops

## Frameworks 
The client side of the project is built using:
- Spring boot ([https://spring.io/]) 
- Hibernate ORM and Search ([http://hibernate.org/])



