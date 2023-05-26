pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                echo "This step tests the project"
            }
        }
        }
        stage('Deploy') {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }        :
        stage('Report') {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}

