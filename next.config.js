/** @type {import('next').NextConfig} */
module.exports = {
   typescript: {
     // !! WARN !!
     // Dangerously allow production builds to successfully complete even if
     // your project has type errors.
     // !! WARN !!
     ignoreBuildErrors: true,
   },
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vfasnguqweqgkqllapci.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
}
