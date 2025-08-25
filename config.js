module.exports = {
  onboardingConfig: {
    extends: [
      'config:recommended',
      'github>umts/renovate-config',
    ]
  },
  platform: 'github',
  repositories: [
    'umts/round-three',
  ],
  repositoryCache: 'enabled',
  dryRun: 'full',
}
