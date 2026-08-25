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
    'umts/incidents',
    'umts/jobapps',
    'umts/gtfs_cache',
    'umts/gtfs-react-hooks',
    'umts/public-message-board',
    'umts/renovate-config',
    'umts/round-three',
    'umts/screaming-dinosaur',
    'umts/stop-project',
    'umts/umaps-rails',
    'umts/umasstransit.rodeo',
  ],
  repositoryCache: 'enabled',
}
