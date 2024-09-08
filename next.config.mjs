/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

const nextConfig = {
  compiler: {
    // styled-component의 SSR 최적화 & 디스플레이 네임 활성화
    // babel-plugin-styled-components 대체
    styledComponents: true,
  }
};

export default withPWA(nextConfig);