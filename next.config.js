const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  compress: true,
  webpack(config, { webpack }) {
    const prod = process.env.NODE_ENV === 'production';
    return {
      ...config,
      mode: prod ? 'production' : 'development',
      devtool: prod ? 'hidden-source-map' : 'eval-source-map',
      plugins: [...config.plugins],
    };
  },
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
});

module.exports = {
  experimental: {
    outputStandalone: true,
  },
}