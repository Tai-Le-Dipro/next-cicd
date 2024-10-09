pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'dev', url: 'https://github.com/Tai-Le-Dipro/next-cicd.git'
            }
        }

        // stage('Build') {
        //     agent any
        //     steps {
        //     //   withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
        //             sh 'docker build -t 461999/next-cicd:latest .'
        //             // sh 'docker push 461999/next-cicd:latest'
        //         // }
        //     }
        // }

        stage("Build") {
            agent any
            steps {
                script {
                    docker.login('https://index.docker.io/v1/', '461999', 'tdnacmiemt')
                }
                sh 'docker build -t 461999/next-cicd:latest .'
            }
        }
        
        stage("Push") {
            agent any
            steps {
               script {
                    docker.push('461999/next-cicd:latest')
                }
            }
        }
    }
}