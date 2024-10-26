pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/KuberLekhi/nodejs-app'
            }
        }
        
        stage('Install Node.js and Dependencies') {
            steps {
                sh '''
                # Use a newer Node.js version instead of 14.x
                curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
                
                # Ensure Jenkins can run this with root privileges
                sudo apt-get update
                sudo apt-get install -y nodejs
                
                # Install dependencies
                npm install
                '''
            }
        }

        stage('Run App') {
            steps {
                sh 'npm start'
            }
        }
    }
}
