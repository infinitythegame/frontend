module.exports = function Cucumber() {
  'use strict';
  return {
    src: 'test/features',
    options: {
      steps: 'test/features/step_definitions',
      format: 'pretty'
    }
  };
};
