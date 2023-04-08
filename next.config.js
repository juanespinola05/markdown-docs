const removeImports = require('next-remove-imports')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
}

// module.exports = removeImports(nextConfig)

module.exports = (phase, { defaultConfig }) => {
  return removeImports({
    ...defaultConfig,
    ...nextConfig
  })
}
