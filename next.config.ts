import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http', // Permitir imágenes con http
        hostname: 'laisladelyoga.local', // Especifica el dominio local de WordPress
      },
      {
        protocol: 'https', // Si usas https en local (aunque Local by Flywheel generalmente usa http)
        hostname: 'laisladelyoga.local',
      },
      {
        protocol: 'http', // También puedes permitir localhost si es necesario
        hostname: 'localhost',
      },
      {
        protocol: 'https', // Si usas https en local (aunque Local by Flywheel generalmente usa http)
        hostname: 'laisladelyoga.com',
      },
    ],
  },
}

export default nextConfig
