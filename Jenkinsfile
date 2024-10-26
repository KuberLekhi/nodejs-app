pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Clone the repository and specify the branch if needed
                git branch: 'main', url: 'https://github.com/KuberLekhi/nodejs-app'
            }
        }
        stage('Install Node.js and Dependencies') {
            steps {
                // Install Node.js using apt if not already installed
                sh '''
                    if ! command -v node &> /dev/null; then
                        curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
                        apt-get install -y nodejs
                    fi
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
