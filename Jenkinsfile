pipeline {
    agent any
    stages {
        stage('Setup Node Environment') {
            steps {
                script {
                    // Load NVM and use a specific Node.js version if needed
                    sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm install 14
                    nvm use 14
                    '''
                }
            }
        }
        // Other stages here
    }
}
