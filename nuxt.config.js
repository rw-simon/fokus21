export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'fokus21',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{ hid: 'description', name: 'description', content: '' }
		]
	},

	loading: {
		color: '#d4145a'
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/app.sass'],

	styleResources: {
		sass: ['@/assets/_variables.sass', '@/assets/_mixins.sass']
	},
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		// '@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/style-resources'
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	pwa: {
		manifest: {
			name: 'Fokus Berufsbildung: Lernen – ein breiter Horizont',
			short_name: 'Fokus Berufsbildung',
			orientation: 'portrait'
		}
	},

	// server: {
	// 	host: '0.0.0.0',
	// 	port: 3000
	// },

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
