module.exports = function testTasks(grunt, options) {
  return {
    concurrent: ['notify:test', 'test:client', 'test:server'],
    notify : {
      options : {
        message: 'Testing full site'
      }
    }
  };
};
