/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
  },

  compiler: {
    // styled-component의 SSR 최적화 & 디스플레이 네임 활성화
    // babel-plugin-styled-components 대체
    styledComponents: true,
  },

  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  }
};

export default nextConfig;
