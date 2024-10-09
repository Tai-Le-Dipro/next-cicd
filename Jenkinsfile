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
                sh 'docker run -d -p 3000:3000 461999/next-cicd:latest'
            }
        }
    }
}
