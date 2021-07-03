module.exports = {
  webpack: (config, { webpack }) => {
    const { ModuleFederationPlugin } = webpack.container
    config.plugins.push(
      new ModuleFederationPlugin({
        name: "next-app",
        remotes: {
          mfe1: "mfe1@http://localhost:8082/remoteEntry.js",
          mfe2: "mfe2@http://localhost:8083/remoteEntry.js",
          mfe3: "mfe3@http://localhost:8084/remoteEntry.js"
        }
      }),
    )
    return config
  },
}