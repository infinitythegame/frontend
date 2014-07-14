module.exports = function concurrent(grunt) {
  'use strict';
  return {
    'test': {
      'all':        ['newer:mochacli:all'],
      'server':     ['newer:mochacli:server']
    }
  };
};
