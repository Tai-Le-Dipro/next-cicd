pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'dev', url: 'https://github.com/Tai-Le-Dipro/next-cicd.git'
            }
        }
        stage('Build and push docker image') {
            steps {
                script {
                    docker.build("461999/next-cicd")
                    sh 'docker login -u 461999 -p tdnacmiemt'
                    sh 'docker push 461999/next-cicd:latest'
                }
            }
        }
        stage('Deploy to remote docker host') {
   
            steps {
                script {
                    sh 'docker login -u 461999 -p tdnacmiemt'
                    sh 'docker pull 461999/next-cicd'
                    sh 'docker run -d --name node-demo -p 80:3000 461999/next-cicd'
                }
            }
        }
    }
}