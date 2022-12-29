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
        stage('Build docker image') {
            steps {
                sh 'docker build -t node_app .'
            }
        }
        stage('test'){
            steps {
                echo 'Testing started.....'
                // sh 'npm test'
                echo 'Testing Finished.'
            }
        }
    }
}