const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      const configName = config.env.config || 'qauto';
      const envConfig = require(`./cypress/configs/${configName}.config.js`);

      return {
        ...config,
        ...envConfig,
        reporter: 'mochawesome',
        reporterOptions: {
          reportDir: 'cypress/reports',
          overwrite: false,
          html: true,
          json: true
        }
      };
    }
  }
});
