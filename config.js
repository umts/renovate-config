module.exports = {
  onboardingConfig: {
    extends: [
      'github>umts/renovate-config:base',
    ]
  },
  onboardingRebaseCheckbox: true,
  platform: 'github',
  repositories: [
    'umts/round-three',
    'umts/umaps-rails',
  ],
  repositoryCache: 'enabled',
}
