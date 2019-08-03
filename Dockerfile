FROM openjdk:8
VOLUME /tmp
EXPOSE 8080
ADD build/libs/db-chart-generator.jar db-chart-generator.jar
ENTRYPOINT ["java", "-jar", "db-chart-generator.jar"]
