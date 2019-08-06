# db-chart-generator
**db-chart-generator** allows users to upload a CSV file, save it to the database and generate corresponding charts.
CRUD functionality and search feature are also available.
This application is a 3 tier web application built using Spring boot, ReactJS and Hibernate.

#### Stack
Component         | Technology
---               | ---
Server            | JavaScript - React 16.8.6
Client            | Java 8 - Spring boot 2.1.6
Database          | Mysql5 - Hibernate Search-ORM 5.10.6
Server Build      | Gradle 5.4.1
Client Build      | npm 5.6.0, yarn 1.10.1
Containerization  | Docker 19.03.1, Docker Compose 1.24.1


## Getting Started
#### Prerequisites
- Java
- Node.js
- Docker (if you want to run with Docker)

### How to Run
##### Use provided CSV files in [db-chart-generator/CSV](db-chart-generator/CSV)
Minified versions for quick test are also available.
File Source: [https://www.kaggle.com/shivamp629/traincsv]

#### Run the application (server, client with database)
In [db-chart-generator/server](db-chart-generator/server) directory, type `./gradlew build && java -jar build/libs/db-chart-generator.jar`.
Open [http://localhost:8080] to view it in the browser.
See [db-chart-generator/server/README.md](db-chart-generator/server/README.md) for details.

#### Run client side only using Node
In [db-chart-generator/client](db-chart-generator/client) directory, type `npm start`.
Open [http://localhost:3000] to view it in the browser.
See [db-chart-generator/client/README.md](db-chart-generator/client/README.md) for details.

#### Run 3 tier docker using Docker
In project root directory[db-chart-generator](db-chart-generator), type `docker-compose up --build`, which will create 3 containers as follows:
- container-database (Use credentials in [db-chart-generator/server](db-chart-generator/server) to access to the database)
- container-server (Open [http://localhost:8080] to view it in the browser)
- container-client (Open [http://localhost:3000] to view it in the browser)
https://hub.docker.com/r/daeupark/db-chart-generator
After running the application, type `docker-compose down` to remove containers.

### Demo
[link]
