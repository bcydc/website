/** @type {import('next').NextConfig} */
const nextConfig = {
    // All routes are static; Cloudflare Pages serves the exported files directly.
    output: "export",
    images: { unoptimized: true },
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
