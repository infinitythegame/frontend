module.exports = function deployTasks(grunt, options) {
  return {
    concurrent: ['concurrent:minify'],
    notify : {
      options : {
        message: 'Deploying site'
      }
    }
  };
};
