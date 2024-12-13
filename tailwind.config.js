/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			gap: {
				'prices': 'calc((40 / 16) * 1rem)',
			},
			
			fontFamily: {
				'open_sans_300': ['open_sans_300', 'sans-serif'],
				'open_sans_400': ['open_sans_400', 'sans-serif'],
				'open_sans_500': ['open_sans_500', 'sans-serif'],
				'open_sans_600': ['open_sans_600', 'sans-serif']
			},
			
			animation: {
				'modal-anim': 'modal-pop 0.2s ease-in-out'
			},
			
			colors: {
				'poodle_green': {
					100: '#19DF76', 300: '#19AA5D', DEFAULT: '#157842', 700: '#1C3D2B',
					800: '#1B2F24', 900: '#1A2821'
				},
				
				'feisty_red': {
					100: '#F05555', 300: '#FF2F00', DEFAULT: '#F00', 600: '#9D2222',
					650: '#EA3535', 700: '#A52424', 800: '#522217', 900: '#391818'
				},
				
				'huskey_blue': {100: '#00A3FF', 200: '#0075B7', 900: '#182D39'},
				
				'golden_grey': {
					100: '#DDD', 200: '#B9B9B9', 300: '#9C9C9C', 400: '#797979',
					DEFAULT: '#686565', 700: '#565656', 800: '#4D4D4D', 900: '#424141'
				},
				
				'gintu_grey': {
					100: '#333', 300: '#2C2C2C', 400: '#282727', 800: '#202020', 900: '#1B1B1B',
					950: '#131313', l: '#F0F'
				},
				
				'order_modal': {DEFAULT: 'rgba(25, 24, 24, 0.8)'},
				'watchlist_hover': {DEFAULT: 'rgba(57, 57, 57, 0.88)'}
			},
			
			gridTemplateColumns: {
				'prices': 'repeat(auto-fill, minmax(15rem, 1fr))'
			}
		}
	},
	plugins: []
}
