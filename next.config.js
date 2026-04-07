/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Use empty turbopack config to silence the warning and support video files
  turbopack: {
    rules: {
      '*.{mp4,webm,ogg,swf,ogv}': {
        loaders: ['file-loader'],
      },
    },
  },
}

module.exports = nextConfig