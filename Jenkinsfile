pipeline {
    agent any

    environment {
        imageName = "pip_poc_04"
        registryCredentials = "	nexus"
        registry = "10.200.100.116:8083"
        dockerImage = ''
        conditional_CT=''
        line_CT=''
        method_CT=''
    }

    tools {
        nodejs 'NodeJS-18.12.1'
    }

    stages {

        stage('Startup') {
            steps {
                script {
                    sh 'npm install'
                    // sh 'npm audit fix --force'
                }
            }
        }

        stage ('Code Quality') {
            steps {
                echo "todo run sonarqube >>>>Here<<<<."
            }
        }

        stage('expression-branch') {
            steps {
                script {
                    sh  "echo ${env.BRANCH_NAME} environment is running"
                    if (env.BRANCH_NAME == "main") {                                          
                       conditional_CT = '70, 0, 0'
                       line_CT = '80, 0, 0'
                       method_CT = '80, 0, 0'
                    } 
                    if (env.BRANCH_NAME == "dev") {
                        conditional_CT = '70, 0, 0'
                        line_CT = '80, 0, 0'
                        method_CT = '80, 0, 0'
                    }
                    if (env.BRANCH_NAME == "test") {
                        conditional_CT = '70, 70, 70'
                        line_CT = '80, 80, 80'
                        method_CT = '80, 80, 80'
                    } 
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
                    cobertura autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml', conditionalCoverageTargets: conditional_CT, failUnstable: false, lineCoverageTargets: line_CT, maxNumberOfBuilds: 1, methodCoverageTargets: method_CT, sourceEncoding: 'ASCII', zoomCoverageChart: false
                }
             }
        }

        stage ('Test Liquibase') {
            agent {
                docker { image 'liquibase/liquibase:4.4.2' }
            }
            steps {
                sh 'liquibase --version'
            }
        }

        stage('Build docker image') {
            steps {
                script {
                    dockerImage = docker.build imageName
                }
            }
        }

        stage('Push Docker Images to Nexus Registry'){
            steps {  
                script {
                    docker.withRegistry( 'http://'+registry, registryCredentials ) {
                        dockerImage.push(env.BRANCH_NAME+'-latest')
                    }
                }
            }
        }

    }
}