const remotePatterns = [
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
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns,
  },
}

export default nextConfig
