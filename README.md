# db-chart-generator
**db-chart-generator** is a 3 tier web application built using Spring boot, ReactJS and Hibernate. <br />
This application allows users to upload a CSV file, save it to the database and generate corresponding charts. <br />
CRUD functionality and search feature are also available. <br />



#### Stack
Component         | Technology
---               | ---
Server            | JavaScript - React 16.8.6
Client            | Java 8 - Spring boot 2.1.6
Database          | Mysql5 - Hibernate Search-ORM 5.10.6
Server Build      | Gradle 5.4.1
Client Build      | npm 5.6.0, yarn 1.10.1
Containerization  | Docker 19.03.1, Docker Compose 1.24.1
Deployment        | AWS EC2, RDS



## Getting Started
#### Prerequisites
- Java 8
- Node.js 8
- Docker 19, Docker-compose 1 (if you want to run with Docker)


### How to Run
Note: Use provided CSV files in [db-chart-generator/CSV](./CSV) to test. <br />
Minified versions for quick test are also available. <br />
File Source: https://www.kaggle.com/shivamp629/traincsv

**Local Database Credentials**
- Host URL: localhost:3306
- Database Name: ezops
- Root password: ezopsezops
- Username: admin
- Password: ezopsezops


#### Run the application (server, client with database) using Gradle
In [db-chart-generator/server](./server) directory, type `./gradlew build && java -jar build/libs/db-chart-generator.jar`. <br />
Open http://localhost:8080 to view it in the browser. <br />
See [db-chart-generator/server/README.md](./server/README.md) for details.


#### Run client side only using Node
In [db-chart-generator/client](./client) directory, type `npm start`. <br />
Open http://localhost:3000 to view it in the browser. <br />
See [db-chart-generator/client/README.md](./client/README.md) for details.


#### Run 3 tier docker using Docker
In project root directory [db-chart-generator](.), type `docker-compose up --build`, which will create 3 containers as follows:

- container-database
  - Use local database credentials to access to the database.
- container-server
  - Open http://localhost:8080 to view it in the browser.
- container-client
  - Open http://localhost:3000 to view it in the browser.

After running the application, type `docker-compose down` to remove containers.


Docker Image is available here: https://hub.docker.com/r/daeupark/db-chart-generator

## Demo
http://dbchartgenerator.us-east-1.elasticbeanstalk.com/ <br />
**Remote Database Credentials**
- Host URL: db-ezops.cehiv9m1bmcz.us-east-1.rds.amazonaws.com
- Username: admin
- Password: ezopsezops
- Database name: ezops
