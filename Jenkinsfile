pipeline {
    agent any

    environment {
        imageName = "npip_poc"
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
                    sh 'npm audit fix --force'
                }
            }
        }

        stage ('Code Quality') {
            steps {
                sh 'echo "todo run sonarqube >>>>Here<<<<."'
            }
        }

        stage('expression-branch') {
            steps {
               if (env.BRANCH_NAME == "main") {                                          
                echo 'run this stage - when branch is not equal to main'
               } 
               if (env.BRANCH_NAME == "dev") {
                echo 'run this stage - when branch is not equal to dev'
               }
               if (env.BRANCH_NAME == "test") {
                echo 'run this stage - when branch is not equal to test'
               } 
            }      
            // when {
            //     expression {
            //         return env.BRANCH_NAME != 'main';
            //     }
            // }
            // steps {
            //     echo 'run this stage - when branch is not equal to main'
            // }
            // when {
            //     expression {
            //         return env.BRANCH_NAME != 'dev';
            //     }
            // }
            // steps {
            //     echo 'run this stage - when branch is not equal to dev'
            // }
            // when {
            //     expression {
            //         return env.BRANCH_NAME != 'test';
            //     }
            // }
            // steps {
            //     echo 'run this stage - when branch is not equal to test'
            // }
        }
        
        stage('Test') {
            steps {
              script {
                sh 'npm run test'
              }
            }
            post {
                always {
                    cobertura autoUpdateHealth: false, autoUpdateStability: false, coberturaReportFile: 'output/coverage/jest/cobertura-coverage.xml', conditionalCoverageTargets: '70, 0, 0', failUnstable: false, lineCoverageTargets: '80, 0, 0', maxNumberOfBuilds: 1, methodCoverageTargets: '80, 0, 0', sourceEncoding: 'ASCII', zoomCoverageChart: false
                }
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