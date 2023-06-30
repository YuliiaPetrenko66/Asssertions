const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl:'http://localhost:8081',
    defaultCommandTimeout: 40000,
    pageLoadTimeout: 70000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
