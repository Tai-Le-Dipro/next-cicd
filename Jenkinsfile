pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'dev', url: 'https://github.com/Tai-Le-Dipro/next-cicd.git'
            }
        }

        stage("Build") {
            steps {
                sh 'docker build -t 461999/next-cicd:latest .'
            }
        }

        stage("Push") {
            steps {
                // Use --password-stdin for security
                script {
                    // Echo the password and pipe it to docker login
                    sh '''
                    echo "tdnacmiemt" | docker login -u "461999" --password-stdin
                    '''
                }
                sh 'docker push 461999/next-cicd:latest'
            }
        }

        stage("Deploy") {
            steps {
                
                // script {
                //     def existingContainer = sh(script: 'docker ps -q --filter "ancestor=461999/next-cicd:latest"', returnStdout: true).trim()
                //     if (existingContainer) {
                //         sh "docker stop ${existingContainer}"
                //         sh "docker rm ${existingContainer}"
                //     }
                // }

                sh 'docker stop $(docker ps -a -q)'
                sh 'docker rm $(docker ps -a -q)'
                sh 'docker run -d -p 3000:3000 461999/next-cicd:latest'
            }
        }
    }
}
