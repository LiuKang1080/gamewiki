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


		/* ========== ========== ==========
		Wo Long: Fallen Dynasty
		========== ========== ========== */
		"./wolong/*.{html,js}",
		"./wolong/**/*.{html,js}",
	],

	theme: {
		extend: {
			/* ==========
			Colors
			========== */
			colors: {
				/* ==========
				General Colors:
				========== */
				'light-gray': '#E4E5EA',
				'medium-gray': '#333338',
				'dark-gray': "#625d5d57",
				'dark-gray-2': "#625d5d99",

				/* ==========
				Nioh 2:
				========== */
				'light-red': '#5f1823',
				'medium-red': '#48181F',
				'dark-red': '#30171b',

				/* ==========
				Wo Long:
				========== */
				'light-peach': '#eee3d6',
				'medium-peach': '#c2955a',
				'dark-peach': '#9d7a46',
				'boss-skill': '#dc710d',
			},

			/* ==========
			Font Family
			========== */ 
			fontFamily: {
				asul: "'Asul', sans-serif;",
				bellefair: "'Bellefair', serif;",
				tinos: "'Tinos', serif;"
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

			/* ==========
			Max Width
			========== */
			maxWidth: {
				'section-width' : '1632px',
			},
		},
	},

	plugins: [],
}
