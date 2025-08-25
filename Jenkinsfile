pipeline {
  agent any
  parameters {
    string(name: 'RENOVATE_ARGS', defaultValue: '', description: 'Optional additional arguments to pass to renovate', trim: true)
  }

  options {
    disableConcurrentBuilds(abortPrevious: true)
    timeout(time: 1, unit: 'HOURS')
    buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: ''))
    ansiColor('xterm')
  }

  stages {
    stage('Fetch Configuration') {
      steps {
        checkout scm
      }
    }

    stage('Renovate') {
      agent {
        docker {
          image 'renovate/renovate:41.82'
          reuseNode true
          args """
            --volume="${env.WORKSPACE}/config.js:/usr/src/app/config.js"
            --volume="${env.WORKSPACE}/.renovate-cache:/tmp/renovate/cache" 
          """
        }
      }
      environment {
        LOG_LEVEL = 'debug'
      }
      steps {
        withCredentials([usernamePassword(credentialsId: 'umts-renovate-app-key', usernameVariable: 'GITHUB_APP', passwordVariable: 'RENOVATE_TOKEN')]) {
          sh "renovate ${params.RENOVATE_ARGS}"
        }
      }
    }
  }
}
