pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/KuberLekhi/nodejs-app'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh '''
                # Install nvm (Node Version Manager)
                curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # Load nvm

                # Install Node.js via nvm
                nvm install 14
                nvm use 14

                # Install dependencies
                npm install
                '''
            }
        }
        stage('Run App') {
            steps {
                sh 'node server.js'
            }
        }
    }
}
