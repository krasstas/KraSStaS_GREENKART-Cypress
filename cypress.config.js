const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
