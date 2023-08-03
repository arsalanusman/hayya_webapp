// @ts-check
const { i18n } = require('./next-i18next.config.js')
const path = require('path')

// You can remove the following 2 lines when integrating our example.
const { loadCustomBuildParams } = require('./next-utils.config')
const { esmExternals = false, tsconfigPath } =
  loadCustomBuildParams()

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n,
  reactStrictMode: true,
  typescript: {
    tsconfigPath,
  },
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'))

    return config
  }
}

module.exports = nextConfig
