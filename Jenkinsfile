pipeline {
  agent any

  parameters {
    string(name: 'RENOVATE_ARGS', defaultValue: '', trim: true,
           description: 'Optional additional arguments to pass to renovate')
  }

  options {
    disableConcurrentBuilds(abortPrevious: true)
    timeout(time: 1, unit: 'HOURS')
    buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: ''))
    ansiColor('xterm')
  }

  triggers {
    githubPush()
    cron('H/20 * * * *')
  }

  stages {
    stage('Fetch Configuration') {
      steps {
        checkout scm
      }
    }

    stage('Renovate') {
      agent {
        dockerfile {
          reuseNode true
          args """
            --user=root:root
            --volume="${env.WORKSPACE}/.renovate-tmp:/tmp/renovate"
            --volume="${env.WORKSPACE}/config.js:/usr/src/app/config.js"
          """
        }
      }
      environment {
        LOG_LEVEL = 'debug'
      }
      steps {
        withCredentials([usernamePassword(credentialsId: 'umts-renovate-app-key',
                         usernameVariable: 'GITHUB_APP',
                         passwordVariable: 'RENOVATE_TOKEN')]) {
          sh "renovate ${params.RENOVATE_ARGS}"
        }
      }
    }
  }
}
