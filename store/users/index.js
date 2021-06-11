import Cookie from 'js-cookie'

export const state = () => ({
	user: {}
})

export const mutations = {
	SET_USER: (state, account) => {
		state.user = account
	}
}

export const actions = {
	async login({ commit }, account) {
		try {
			await this.$fire.auth.signInWithEmailAndPassword(account.email, account.password) // login the user
			const userToken = await this.$fire.auth.currentUser.getIdToken() // creates json web token from firebase
			const { email, uid } = this.$fire.auth.currentUser
			Cookie.set('access_token', userToken) // saves token as cookie
			commit('SET_USER', {
				email,
				uid
			})
		} catch (err) {
			throw err
		}
	},
	async register({ commit }, account) {
		try {
			await this.$fire.auth.createUserWithEmailAndPassword(account.email, account.password).then(cred => {
				return this.$fire.firestore
					.collection('users')
					.doc(cred.user.uid)
					.set({
						gender: account.gender,
						vorname: account.vorname,
						nachname: account.nachname,
						referal: account.referal,
						email: account.email,
						address: { street: '', nr: '', plz: '', city: '' },
						firma: { name: '' },
						phone: '',
						ticket: { bought: false },
						workshops: { morning: '', afternoon: '' }
					})
			}) // register the user (in fb.auth as well as fb.firestore)
			const userToken = await this.$fire.auth.currentUser.getIdToken() // creates json web token from firebase
			const { email, uid } = this.$fire.auth.currentUser
			Cookie.set('access_token', userToken) // saves token as cookie
			commit('SET_USER', {
				email,
				uid // set user locally
			})
		} catch (err) {
			throw err
		}
	}
}
