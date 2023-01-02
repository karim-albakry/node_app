pipeline {
    agent any
    tools {
        nodejs 'NodeJS-18.12.1'
    }
    stages {
        stage('checkout repo') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/karim-albakry/node_app']]])
            }
        }
        stage('Startup') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        stage('Test') {
            steps {
              script {
                sh 'npm run test'
              }
            }
            post {
              always {
                step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml', autoUpdateHealth: true,])
              }
            }
        }
        stage('Build docker image') {
            steps {
                sh 'docker build -t node_app .'
            }
        }
    }
}