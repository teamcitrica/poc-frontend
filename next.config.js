/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },

  // Transpilación de módulos ESM para Spline
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],

  // Configuración condicional: solo se aplica si no estás usando Turbopack
  webpack: (config, { isServer, nextRuntime }) => {
    // Si estamos en Turbopack, no tocar nada
    if (nextRuntime === 'nodejs') {
      // Soporte para archivos .splinecode
      config.module.rules.push({
        test: /\.splinecode$/,
        type: 'asset/resource',
      });

      // Evitar errores con dependencias nativas
      config.externals.push({
        'utf-8-validate': 'commonjs utf-8-validate',
        'bufferutil': 'commonjs bufferutil',
      });

      // Optimización para Three.js
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
          path: false,
          crypto: false,
        };
      }
    }

    return config;
  },
};

module.exports = nextConfig;
