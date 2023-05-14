pipeline {
     agent any
     stages {
           stage('Fetch code') {
            steps {
                git branch: 'dev',
                credentialsId: 'Elmeselhy',
                url: 'https://github.com/AliKhalaf1/Eventbrite-front-end.git'
            }
        }
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}
