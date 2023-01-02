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
        stage('Test') {
          steps {
            script {
              sh 'npm run test'
            }
          }
          post {
            always {
              junit 'junit.xml'
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