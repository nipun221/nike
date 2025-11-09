pipeline {
  agent any
  tools { nodejs 'Node_25' }   // matches the name you configured in Tools
  triggers {
    scm('H/2 * * * *')       
  }
  options {
    timestamps()
    ansiColor('xterm')
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
        // archive build output as artifact
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
