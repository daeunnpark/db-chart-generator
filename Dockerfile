FROM openjdk:8
ADD build/libs/db-chart-generator.jar db-chart-generator.jar
ENTRYPOINT ["java", "-jar", "db-chart-generator.jar"]
