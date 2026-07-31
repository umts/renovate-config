module.exports = {
  onboardingConfig: {
    extends: [
      'config:recommended',
      'github>umts/renovate-config:base',
    ]
  },
  onboardingRebaseCheckbox: true,
  platform: 'github',
  repositories: [
    'umts/gtfs-react-hooks',
    'umts/round-three',
    'umts/umaps-rails',
  ],
  repositoryCache: 'enabled',
}
