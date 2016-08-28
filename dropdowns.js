module.exports = [
  {
    type: 'environment',
    label: 'Select Environment',
    options: [
      { label: 'DEVELOPMENT', value: 'dev' },
      { label: 'QA', value: 'qa' },
      { label: 'PRODUCTION', value: 'prod' },
    ]
  },
  {
    type: 'product',
    label: 'Select Product',
    options: [
      { label: 'Rescue', value: 'rescue' },
      { label: 'Rally', value: 'rally' },
      { label: 'Reward', value: 'reward' },
    ]
  },
  {
    type: 'adType',
    label: 'Select Ad Type',
    options: [
      { label: 'Video', value: 'video' },
      { label: 'Vast', value: 'vast' },
      { label: 'Vizu', value: 'vizu' },
      { label: 'Static', value: 'static' }
    ]
  }
];
