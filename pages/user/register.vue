<template>
	<div class="wrapper">
		<div class="container">
			<div class="register-panel">
				<h1>Willkommen</h1>
				<h2>Um dich am Event anzumelden, erstelle jetzt dein Benutzerkonto!</h2>
				<hr />
				<form @submit.prevent="register" class="login">
					<select name="" id="" v-model="account.gender"
						><option value="Herr">Herr</option
						><option value="Frau">Frau</option>
						<option value=" ">Andere</option></select
					><span></span>
					<input type="text" required v-model="account.vorname" placeholder="Vorname*" />
					<input type="text" required v-model="account.nachname" placeholder="Nachname*" />
					<!-- <hr style="grid-column: span 2" /> -->
					<input type="email" required v-model="account.email" placeholder="Email*" />
					<input type="password" required v-model="account.password" placeholder="Passwort*" />
					<div style="grid-column: span 2">
						<hr />
						<input :class="{ inactive: isSuccess }" type="submit" value="Registrieren" />
						<nuxt-link to="/user/login" class="button button-blue">Bereits registriert</nuxt-link>
					</div>
					<!-- <div>
						<hr />
						<nuxt-link to="/register" class="forgot-password"> Neu Registrieren</nuxt-link> |
						<a @click="forgotPassword()"> Passwort vergessen</a>
					</div> -->
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'user-register',
	head: {
		title: 'Registrieren | Fokus Berufsbildung 2021'
	},
	data: () => ({
		account: {
			gender: 'Herr',
			vorname: '',
			nachname: '',
			referal: 'Berufsbildner',
			email: '',
			password: ''
		},
		isError: false,
		errMsg: '',
		isSuccess: false
	}),
	methods: {
		register() {
			this.$store.dispatch('users/register', this.account).catch(err => {
				this.isError = true
				this.errMsg = err.message
			})
			this.isSuccess = true
			setTimeout(() => {
				// location.href = '/user/dashboard'
				this.$router.push('/user/dashboard')
			}, 1500)
		}
	},
	mounted() {
		this.$store.commit('pagetitle/change', 'Registrieren')
	}
}
</script>

<style lang="sass" scoped>
.register-panel
	form
		display: grid
		grid-template-columns: 1fr 1fr
		gap: 1rem
		input[type="submit"]
			// grid-column: 1/-1
			cursor: pointer
			width: auto
			background: $c-red
			border-color: $c-red
			color: white
			display: inline-block
			&:hover
				background: $c-red-light
</style>
