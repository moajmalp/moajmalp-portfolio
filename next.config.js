/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Since it's a portfolio, we might be deploying to static hosting or just to simplify image handling for now
    },
};

export default nextConfig;
