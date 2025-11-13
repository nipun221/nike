pipeline {
  agent any
  tools { nodejs 'Node_25' }   // matches the name you configured in Tools
  triggers {
    pollSCM('H/2 * * * *')       
  }
  options {
    timestamps()
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install') {
      steps {
        sh 'npm ci || npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }
  }
  post {
    success {
      echo '✅ Build succeeded'
    }
    failure {
      echo '❌ Build failed'
    }
  }
}
