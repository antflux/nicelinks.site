module.exports = {
  apps: [
    {
      name: 'nicelinks',
      script: './src/index.js',
      // Options reference: http://pm2.keymetrics.io/docs/usage/application-declaration/
      exec_mode: 'cluster',
      instances: "max",
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      restart_delay: 3000
    }
  ]
}
