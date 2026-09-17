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
  }

  stages {
    stage('Fetch Configuration') {
      steps {
        checkout scm
      }
    }

    stage('Inspect') {
      steps {
        sh '''
          echo "=== Top level ==="
          du -h -d 1 .renovate-tmp 2>/dev/null | sort -h

          echo
          echo "=== Cache ==="
          du -h -d 2 .renovate-tmp/cache 2>/dev/null | sort -h | tail -50

          echo
          echo "=== Repos ==="
          du -h -d 2 .renovate-tmp/repos 2>/dev/null | sort -h | tail -50

          echo
          echo "=== File counts ==="
          printf 'Total: '
          find .renovate-tmp -type f | wc -l
          printf 'Cache: '
          find .renovate-tmp/cache -type f 2>/dev/null | wc -l
          printf 'Repos: '
          find .renovate-tmp/repos -type f 2>/dev/null | wc -l
        '''
      }
    }
  }

  post {
    success {
      mail to: 'mmoretti@umass.edu',
           subject: "TEST run succeeded (${env.JOB_NAME})",
           body: "Build Successful ${env.JOB_NAME} build no: ${env.BUILD_NUMBER}\n\nView the log at:\n ${env.BUILD_URL}"
    }
  }
}
