FROM gradle:jdk17 AS builder
ARG USERNAME
ARG PASSWORD
COPY ./ /home/gradle/project/
WORKDIR /home/gradle/project/
RUN ./gradlew build



# Use an official Tomcat runtime as a parent image
FROM tomcat:latest

# Remove the default Tomcat applications
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy the WAR file from the build output directory to the Tomcat webapps directory
COPY --from=builder /home/gradle/project/build/libs/WebsiteCarbonEmitterApplication.war /usr/local/tomcat/webapps/ROOT.war

# Expose port 8080
EXPOSE 8080

# Start Tomcat
CMD ["/usr/local/tomcat/bin/catalina.sh", "run"]
