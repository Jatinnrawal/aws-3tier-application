pipeline {
    agent any

    environment {
        AWS_REGION = 'ap-south-1'
        ECR_REPO = '772954893836.dkr.ecr.ap-south-1.amazonaws.com/aws-3tier-devops-backend'
        EC2_INSTANCE = 'i-08854436a67539f0a'
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Test') {
            steps {
                dir('backend') {
                    sh '''
                        npm install
                        node --check server.js
                    '''
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh '''
                    docker build \
                      -t ${ECR_REPO}:${IMAGE_TAG} \
                      -t ${ECR_REPO}:latest \
                      ./backend
                '''
            }
        }

        stage('ECR Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'aws-jenkins',
                        usernameVariable: 'AWS_ACCESS_KEY_ID',
                        passwordVariable: 'AWS_SECRET_ACCESS_KEY'
                    )
                ]) {
                    sh '''
                        export AWS_DEFAULT_REGION=${AWS_REGION}

                        aws ecr get-login-password \
                          --region ${AWS_REGION} | \
                        docker login \
                          --username AWS \
                          --password-stdin ${ECR_REPO}
                    '''
                }
            }
        }

        stage('Push to ECR') {
            steps {
                sh '''
                    docker push ${ECR_REPO}:${IMAGE_TAG}
                    docker push ${ECR_REPO}:latest
                '''
            }
        }

        stage('Deploy to EC2') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'aws-jenkins',
                        usernameVariable: 'AWS_ACCESS_KEY_ID',
                        passwordVariable: 'AWS_SECRET_ACCESS_KEY'
                    )
                ]) {
                    sh '''
                        export AWS_DEFAULT_REGION=${AWS_REGION}

                        COMMAND_ID=$(aws ssm send-command \
                          --instance-ids "${EC2_INSTANCE}" \
                          --document-name "AWS-RunShellScript" \
                          --parameters "commands=[
                            \\"aws ecr get-login-password --region ${AWS_REGION} | docker login --username AWS --password-stdin ${ECR_REPO}\\",
                            \\"docker pull ${ECR_REPO}:${IMAGE_TAG}\\",
                            \\"docker rm -f app-backend 2>/dev/null || true\\",
                            \\"docker run -d --name app-backend -p 5000:5000 ${ECR_REPO}:${IMAGE_TAG}\\"
                          ]" \
                          --query 'Command.CommandId' \
                          --output text)

                        echo "SSM Command: ${COMMAND_ID}"

                        aws ssm wait command-executed \
                          --command-id "${COMMAND_ID}" \
                          --instance-id "${EC2_INSTANCE}"

                        aws ssm get-command-invocation \
                          --command-id "${COMMAND_ID}" \
                          --instance-id "${EC2_INSTANCE}" \
                          --query '[Status,StandardOutputContent,StandardErrorContent]' \
                          --output text
                    '''
                }
            }
        }
    }

    post {
        always {
            sh 'docker image prune -f || true'
        }

        success {
            echo ' Deployment successful!'
        }

        failure {
            echo ' Pipeline failed.'
        }
    }
}
