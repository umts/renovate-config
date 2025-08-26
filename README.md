UMass Transortation Renovate Config
===================================

This repository contains the [Renovate][renovate] configuration for UMass
Transportation, which we run on our [Jenkins][jenkins] install,
<https://jenkins.umass.edu/>. There are just three configuration files:

- `Jenkinsfile`: Defines the Jenkins pipeline, it requires a GitHub app
  credential to be set up in Jenkins. See Renovate's
  [GitHub App requirements][renovate-gh-app], and
  [Jenkins's documentation on setting up app credentials][jenkins-gh-app].

  There is an optional parameter to the pipeline, `RENOVATE_ARGS` which can be
  used to add command-line arguments to manually-triggered runs.

- `config.js`: The [self-hosted configuration file][renovate-config] for
  Renovate.  This defines _how_ Renovate runs.

- `base.json`: The [base preset][renovate-presets] for UMass
  Transportation. This defines _what_ Renovate does and will be included in the
  onboarding PRs for new repositories.

[renovate]: https://github.com/renovatebot/renovate
[jenkins]: https://www.jenkins.io/
[renovate-gh-app]: https://docs.renovatebot.com/modules/platform/github/#running-as-a-github-app
[jenkins-gh-app]: https://docs.cloudbees.com/docs/cloudbees-ci/latest/cloud-admin-guide/github-app-auth
[renovate-config]: https://docs.renovatebot.com/self-hosted-configuration/
[renovate-presets]: https://docs.renovatebot.com/config-presets/
