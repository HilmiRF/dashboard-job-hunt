/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fjxukhjftzlaygokebmj.supabase.co",
			},
		],
	},
};

module.exports = nextConfig;
