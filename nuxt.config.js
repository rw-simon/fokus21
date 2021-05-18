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
		// [
		// 	'@nuxtjs/firebase',
		// 	{
		// 		config: {
		// 			apiKey: 'AIzaSyCYeLVRmer4MHXBHjCDe4fdVCePQHnjc40',
		// 			authDomain: 'fokus-berufsbildung-371ab.firebaseapp.com',
		// 			databaseURL: 'https://fokus-berufsbildung-371ab.firebaseio.com',
		// 			projectId: 'fokus-berufsbildung-371ab',
		// 			storageBucket: 'fokus-berufsbildung-371ab.appspot.com',
		// 			messagingSenderId: '272891773690',
		// 			appId: '1:272891773690:web:9d93b3d46650116196bf43'
		// 		},
		// 		services: {
		// 			auth: true,
		// 			firestore: true
		// 			// functions: true,
		// 			// storage: true,
		// 			// performance: true,
		// 			// analytics: true,
		// 		},
		// 		onFirebaseHosting: false
		// 		// lazy: true,
		// 	}
		// ]
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

	router: {
		// middleware: ['authenticated']
	},
	server: {
		host: '0.0.0.0',
		port: 3000
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
