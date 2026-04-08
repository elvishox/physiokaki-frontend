/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Elimina "output: 'export'" para que funcione en Vercel
  trailingSlash: false,
}

module.exports = nextConfig