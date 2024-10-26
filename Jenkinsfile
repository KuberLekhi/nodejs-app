pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/KuberLekhi/nodejs-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js and npm if not already installed
                    sh 'curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -'
                    sh 'sudo apt-get install -y nodejs'

                    // Install application dependencies
                    sh 'npm install'
                }
            }
        }

        stage('Run App') {
            steps {
                script {
                    // Start the application
                    sh 'nohup npm start &'
                }
            }
        }
    }
}
