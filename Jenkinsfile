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
                step([$class: 'CoberturaPublisher', coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml',
                 enableNewApi: true,
  autoUpdateHealth: true,
  autoUpdateStability: true,
  failUnstable: true,
  failUnhealthy: true,
  failNoReports: true,
  onlyStable: false,
  conditionalCoverageTargets: '80, 0, 0',
  fileCoverageTargets: '80, 0, 0',
  lineCoverageTargets: '80, 0, 0',
  methodCoverageTargets: '80, 0, 0',
  packageCoverageTargets: '80, 0, 0'
  ])
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