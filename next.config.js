const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  },

  assetPrefix: isProd ? 'https://cdn.rodneyrinaldi.com' : '',
}