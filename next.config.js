/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'emsudzvtqqwqdvzvrsqx.supabase.co',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
