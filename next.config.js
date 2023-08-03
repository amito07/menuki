/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        base_url: "http://menuki.noeticit.tech",
    },
    images: {
        domains: ['menuki.noeticit.tech'], // Add your domain(s) to this array
    },
}

module.exports = nextConfig
