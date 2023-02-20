/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		/* ========== ========== ==========
		Main Landing Page
		========== ========== ========== */
		"./*.{html,js}",

		/* ========== ========== ==========
		Nioh 2
		========== ========== ========== */
		// Index:
		"./nioh2/*.{html,js}",
		"./nioh2/**/*.{html,js}",

		// Basics:

		// Combat:

		// Equipment:
		"./nioh2/equipment/*.{html,js}",
		"./nioh2/equipment/**/*.{html,js}",

		// World:

		// Tools & Resources:

		// Online:
	],
	
	theme: {
		extend: {
			/* ==========
			Colors
			========== */
			colors: {
				'light-gray': '#3d3d3d',
				'medium-gray': '#333338',
				'light-red': '#5f1823',
				'dark-red': '#30171b',
			},

			/* ==========
			Font Family
			========== */ 
			fontFamily: {
				asul: "'Asul', sans-serif;"
			},
			
			/* ==========
			Animations
			========== */
			keyframes: {
				'open-menu': {
					'0%': { transform: 'scaleY(0)' },
					'80%': { transform: 'scaleY(1.1)' },
					'100%': { transform: 'scaleY(1)' }
				},
			},

			animation: {
				'open-menu': 'open-menu 0.35s ease-in-out forwards'
			},

		},
	},
	
	plugins: [],
}
