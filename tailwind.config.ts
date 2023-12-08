import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#eb2127",
					light: "#f16468",
					dark: "#8d1417",
					50: "#fde9e9",
					100: "#fbd3d4",
					200: "#f9bcbe",
					300: "#f7a6a9",
					400: "#f59093",
					500: "#ef4d52",
					600: "#d41e23",
					700: "#a5171b",
					800: "#761114",
					900: "#460a0c",
				},
			},
		},
	},
	plugins: [],
};
export default config;
