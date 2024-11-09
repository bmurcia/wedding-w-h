/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				serif: ['"Libre Baskerville"', 'serif'],
        		sans: ['Montserrat', 'sans-serif'],
			},
			letterSpacing: {
				'extra-wide': '8px',
			},
		},
	},
	plugins: [],
}
