const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	skipWaiting: true,
})

const nextConfig = withPWA({
	reactStrictMode: true, // Ваши другие настройки Next.js
	experimental: {
		appDir: true, // Убедитесь, что App Router включен
	},
})

module.exports = nextConfig
