pipeline {
    agent any

    stages {
        stage('docker-build-front') {
            steps {
                script {
                    // Use 'sh' step to execute shell commands
                    sh 'docker build /var/lib/jenkins/workspace/Diplom/FrontEnd/my-app/ --tag=front'
                }
            }
        }
        stage('docker-build-sql') {
            steps {
                script {
                    // Use 'sh' step to execute shell commands
                    sh 'docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Qwerty-1" -p 1433:1433 --name sql111 --hostname sql1 -d mcr.microsoft.com/mssql/server:2022-latest'
                }
            }
        }
        stage('docker-build-back') {
            steps {
                script {
                    // Use 'sh' step to execute shell commands
                    sh 'docker build /var/lib/jenkins/workspace/Diplom/BackEnd/Amazon-clone/ --tag=back'
                }
            }
        }
        stage('docker-run-front') {
            steps {
                script {
                    // Use 'sh' step to execute shell commands
                    sh 'docker run -d -p 80:80 front'
                }
            }
        }
         stage('docker-run-back') {
            steps {
                script {
                    // Use 'sh' step to execute shell commands
                    sh 'docker run -d -p 5034:80 back'
                }
            }
        }
    }
}
