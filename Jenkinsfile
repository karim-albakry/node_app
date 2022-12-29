pipeline {
    agent any
    tools {
        node 'NodeJS-18.12.1'
    }
    stages {
        stage('Test') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/karim-albakry/node_app']]])
                sh 'npm install'
                echo 'Testing started.....'
                sh 'npm test'
                echo 'Testing Finished.'
            }
        }
    }
}