/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_EMAIL_SERVICE_ID: process.env.REACT_APP_EMAIL_SERVICE_ID,
    REACT_APP_EMAIL_TEMPLATE_ID: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
    REACT_APP_EMAIL_PUBLIC_KEY: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
  },
};

export default nextConfig;
