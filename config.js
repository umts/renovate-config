module.exports = {
  onboardingConfig: {
    extends: [
      'config:recommended',
      'github>umts/renovate-config:base',
    ]
  },
  platform: 'github',
  repositories: [
    'umts/round-three',
  ],
  repositoryCache: 'enabled',
}
