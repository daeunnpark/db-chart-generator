# db-chart-generator
This application allows users to upload a csv file, save it to the database and generate corresponding charts.
CRUD functionnality and search feature are also available.
This application is built using Spring boot, ReactJS and HIbernate. It also provides 3 tier docker.

### Stack
Component         | Technology
---                        | ---
Server                  | JavaScript - React 16.8.6
Client                   | Java 8(!!!!) - Spring boot 2.1.6
Database             | Mysql5 - Hibernate Search-ORM 5.10.6
Client Build          | npm, yarn, webpack
Server Build         | Gradle 5.4.1
Docker                 | (!!!!) 


## Getting Started
### Prerequisites
- Java 8
- Node.js 
- Docker (!!) if you are running with Docker

### How to Run
### Download provided CSV files in [db-chart-generator/CSV](db-chart-generator/CSV)
Minifed versions (train_min_1.csv, train_min_2.csv) for quick test are also available.
Source: [https://www.kaggle.com/shivamp629/traincsv]

#### Run the application (server and client side) using Gradle
Type `./gradlew build && java -jar build/libs/db-chart-generator.jar` in  db-chart-generator/server directory.
Open [http://localhost:8080] to view it in the browser.

#### Run client side only using Node
Type  `npm start` in db-chart-generator/client directory.
See README in (db-chart-generator/client) for details.

#### Run 3 tier docker using Docker
Type `docker-compose up` , which creates 3 containers as follows:
- ex
-
Open [http://localhost:8080] to view it in the browser.

### Deployement url
[link]


