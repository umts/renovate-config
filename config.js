module.exports = {
  onboardingConfig: {
    extends: [
      'github>umts/renovate-config:base',
    ]
  },
  onboardingRebaseCheckbox: true,
  platform: 'github',
  repositories: [
    'umts/departure-board',
    'umts/dev-training-web',
    'umts/fleetfocus-api',
    'umts/gtfs_cache',
    'umts/gtfs-react-hooks',
    'umts/public-message-board',
    'umts/round-three',
    'umts/umaps-rails',
  ],
  repositoryCache: 'enabled',
}
