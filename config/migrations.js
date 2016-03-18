module.exports = {
  development: {
    schema: { 'migration': {} },
    modelName: 'Users',
    db: process.env.MONGOLAB_URI || 'mongodb://localhost/buildyournetwork'
  },
