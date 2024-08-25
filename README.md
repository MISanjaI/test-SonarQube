# test-SonarQube
integrating SonarQube for a sample web project

// This test is performed on linux platform (Linux Mint 22)

# Here’s a detailed step-by-step guide for installing and setting up SonarQube, including database configuration and authentication:

"SonarQube Installation Guide"
  Prerequisites:
   1. Java: Ensure you have Java 11 or higher installed.
  You can check your Java version by running in the terminal:
 ----------------------------------------------------------------------------
          java -version
 ----------------------------------------------------------------------------
 
   2. Database: You need a supported database such as PostgreSQL, MySQL, Oracle, or Microsoft SQL Server. This guide will focus on PostgreSQL.
   3. RAM: At least 2GB of RAM is recommended.

STEP 1: Download SonarQube

  Visit the official SonarQube website: SonarQube Downloads.
  Download the Community Edition ZIP file.

STEP 2: Extract the ZIP File

  Extract the contents to a directory of your choice. For example: (enter these commands in terminal)
----------------------------------------------------------------------------------
    mkdir /opt/sonarqube
    unzip sonarqube-<version>.zip -d /opt/sonarqube
----------------------------------------------------------------------------------

== You have the freedom to choose any database that suits your needs or requirements. I choose POSTGRESQL for this one !!! ==

STEP 3: Database Setup (PostgreSQL)

 a) Install PostgreSQL
   Update your package list:
----------------------------------------------------------------------------------
    sudo apt-get update
----------------------------------------------------------------------------------

   Install PostgreSQL:
----------------------------------------------------------------------------------
    sudo apt-get install postgresql
----------------------------------------------------------------------------------

b) Create a Database and User for SonarQube
   Switch to PostgreSQL User: Access the PostgreSQL prompt by switching to the postgres user:
----------------------------------------------------------------------------------
    sudo -u postgres psql
----------------------------------------------------------------------------------

  Create Database: Create a new database named sonarqube:
----------------------------------------------------------------------------------
    CREATE DATABASE sonarqube;
----------------------------------------------------------------------------------

  Create User: Create a user named sonarqube with a secure password:
----------------------------------------------------------------------------------
    CREATE USER sonarqube WITH ENCRYPTED PASSWORD 'your_password';
----------------------------------------------------------------------------------
# Replace the 'your_password' with your desired password.

  Grant Privileges: Allow the sonarqube user to access the database:
----------------------------------------------------------------------------------
    GRANT ALL PRIVILEGES ON DATABASE sonarqube TO sonarqube;
----------------------------------------------------------------------------------

 Exit PostgreSQL: Type \q to exit the PostgreSQL prompt.

STEP 4: Configure SonarQube
   
 Edit the SonarQube Configuration File
  
  Open Configuration File: Use a text editor to open the sonar.properties configuration file:
----------------------------------------------------------------------------------
    nano /opt/sonarqube/conf/sonar.properties
----------------------------------------------------------------------------------

  Modify Database Connection Settings

  Uncomment and Modify: Find the following lines in the file and modify them to match your PostgreSQL setup:
----------------------------------------------------------------------------------
    sonar.jdbc.username=sonarqube
    sonar.jdbc.password=your_password
    sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube
----------------------------------------------------------------------------------

Replace "your_password" with the password you set for the sonarqube user in the previous steps.

STEP 5: Start SonarQube

  Run the Startup Script
 Navigate to the Bin Directory: Change to the directory that contains the startup scripts. Replace [your_OS] with your operating system (e.g., linux-x86-64):
-----------------------------------------------------------------------------------
    cd /opt/sonarqube/bin/[your_OS]
-----------------------------------------------------------------------------------

 Start SonarQube: Execute the startup script to launch the SonarQube server:
-----------------------------------------------------------------------------------
    ./sonar.sh start
-----------------------------------------------------------------------------------

STEP 6: Access SonarQube

  Open Web Browser: After starting the server, open a web browser and navigate to:
-----------------------------------------------------------------------------------
    http://localhost:9000
-----------------------------------------------------------------------------------

   # Login: Use the default credentials:
   # Username: admin
   # Password: admin
