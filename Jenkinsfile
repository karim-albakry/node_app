pipeline {
    agent any
    tools {
        nodejs 'NodeJS-18.12.1'
    }
    stages {
        stage('build') {
            steps {
                ech 'Checkout form repo...'
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/karim-albakry/node_app']]])
                ech 'Checkout finished'
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