import { withImages } from 'next-images'
const withOptimizedImages = optimizedImages({
  handleImages: ['jpeg', 'jpg', 'png', 'svg'],
  optimizeImagesInDev: true,
  responsive: {
    adapter: require('responsive-loader/sharp')
  }
})
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  images: {
    domains: ['your-domain.com']
},
  webpack(config) {
    // Custom Webpack configuration can go here if needed.
    return config
  }
}
export default withImages(nextConfig;);