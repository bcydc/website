/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev }) => {
        if (dev) {
            config.watchOptions = {
                poll: true, // Fix for hot reloading
            }

            return config;
        }

        return config;
    }
};

export default nextConfig;
