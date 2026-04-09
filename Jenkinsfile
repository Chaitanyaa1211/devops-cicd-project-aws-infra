pipeline {
 agent any

 stages {

 stage('Clone Code') {
 steps {
 git 'https://github.com/Chaitanyaa1211/devops-cicd-project-aws-infra.git'
 }
 }

 stage('Build Docker Image') {
 steps {
 sh 'docker build -t chaitanyaaaa/devops-demo:latest .'
 }
 }

 stage('Push Docker Image') {
 steps {
 sh 'docker login -u chaitanyaaaa -p dckr_pat_Sq4zNOb8EvgHd7XmFxqHTOdu4G0'
 sh 'docker push chaitanyaaaa/devops-demo:latest'
 }
 }

 stage('Deploy to Kubernetes') {
 steps {
 sh 'kubectl apply -f deployment.yaml'
 sh 'kubectl apply -f service.yaml'
 }
 }

 }
}

