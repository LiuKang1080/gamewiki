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

		/* ========== ========== ==========
		Nioh 3
		========== ========== ========== */
		// Index:
		"./nioh3/*.{html,js}",
		"./nioh3/**/*.{html,js}",
	],

	theme: {
		extend: {
			/* ========== ========== ========== ========== ==========
			Colors
			========== ========== ========== ========== ========== */
			colors: {
				/* ========== ========== ==========
				General Colors:
				========== ========== ========== */
				'light-gray': '#E4E5EA',
				'medium-gray': '#333338',
				'dark-gray': "#625d5d57",
				'dark-gray-2': "#625d5d99",

				/* ========== ========== ==========
				Nioh 2:
				========== ========== ========== */
				'light-red': '#5f1823',
				'medium-red': '#48181F',
				'dark-red': '#30171b',

                /* ========== ========== ==========
                Rarity Text Colors:
                ========== ========== ========== */
                /* ==========
                Common Gear Text Color: [WHITE]
                ========== */
                // text-slate-300

                /* ==========
                Uncommon Gear Text Color: [YELLOW]
                ========== */
                'uncommon-text-color': '#fcde62',

                /* ==========
                Rare Gear Text Color: [BLUE]
                ========== */
                'rare-text-color': '#7cd8ff',

                /* ==========
                Exotic Gear Text Color: [PURPLE]
                ========== */
                'exotic-text-color': '#d2a1ff',

                /* ==========
                Divine Gear Text Color: [GREEN]
                ========== */
                'divine-text-color': '#92f974',

                /* ==========
                Ethreal Gear Text Color: [ORANGE]
                ========== */
                // Ethereal Gear Color
                // font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#fdd365] to-[#fa7e38]

                // Soul Core Drop color
                // font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#fa7e38] to-[#fdd365]

                /* ==========
                Tea Utensil Drop Color: [SILVER]
                ========== */
                // font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#c3d4e2] to-[#768192]

                /* ==========
                Debuff Text Color: [DEBUFF RED]
                ========== */
                'debuff-text-color': '#ed406a',

                /* ==========
                Buff Text Color: [BUFF BLUE]
                ========== */
                'buff-text-color': '#409af1',
			},

			/* ========== ========== ========== ========== ==========
			Font Family
			========== ========== ========== ========== ========== */ 
			fontFamily: {
				// Nioh 2 font: TailWindCSS syntax: font-asul
				asul: "'Asul', sans-serif;",
				noto: "'Noto Serif JP', serif;",

				// General Table font:
				tinos: "'Tinos', serif;"
			},
			
			/* ========== ========== ========== ========== ==========
			Animations
			========== ========== ========== ========== ========== */
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

			/* ========== ========== ========== ========== ==========
			Max Width
			========== ========== ========== ========== ========== */
			maxWidth: {
				// specific width for <section> elements in _index.html pages.
				'section-width' : '1632px',
			},
		},
	},

	plugins: [],
}
