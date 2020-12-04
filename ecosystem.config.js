module.exports = {
  apps: [
    {
      name: 'azimoff-me',
      port: 3200,
      // exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
