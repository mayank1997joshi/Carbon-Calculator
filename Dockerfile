# Use an official Tomcat runtime as a parent image
FROM tomcat:latest

# Remove the default Tomcat applications
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy the WAR file from the build output directory to the Tomcat webapps directory
COPY build/libs/WebsiteCarbonEmitterApplication.war /usr/local/tomcat/webapps/ROOT.war

# Expose port 8080
EXPOSE 8080

# Start Tomcat
CMD ["catalina.sh", "run"]
