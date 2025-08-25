pipeline {
  agent any
  stages {
    stage('Fetch Code') {
      steps {
        checkout scm
      }
    }

    stage('Renovate') {
      agent {
        docker {
          image 'renovate/renovate:41.82'
          reuseNode true
          args "--volume ${env.WORKSPACE}/config.js:/usr/src/app/config.js"
        }
      }
    }
  }
}
