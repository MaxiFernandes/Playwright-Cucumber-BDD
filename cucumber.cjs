module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'src/support/**/*.ts',
      'src/steps/**/*.ts'
    ],
    paths: ['src/features/**/*.feature'],
    format: [
      'progress',
      'json:reports/json/cucumber-report.json'
    ]
  }
};
