<template>
	<div class="wrapper">
		<div class="container">
			<div class="login-panel">
				<h1>Login</h1>
				<h3>Melde dich jetzt an, um am Event am 4. Oktober teilzunehmen!</h3>
				<hr />
				<form @submit.prevent="login" class="login">
					<input type="email" required v-model="account.email" class="full" placeholder="Email" />
					<input type="password" required v-model="account.password" class="full" placeholder="Passwort" />
					<div class="errorMsg" style="grid-column: span 2">
						<p v-if="errMsg">{{ errMsg }}</p>
					</div>
					<div style="grid-column: span 2">
						<hr />
						<input :class="{ inactive: isSuccess }" type="submit" value="Einloggen" />
						<nuxt-link to="/user/register" class="button button-blue">Neu Registrieren</nuxt-link>
					</div>
					<div>
						<nuxt-link to="passwort-vergessen" class="forgot-password"> Passwort vergessen</nuxt-link>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head: {
		title: 'Login | Fokus Berusfsbildung 2022',
	},
	data() {
		return {
			subtitle: 'Melde dich jetzt an, um dein Ticket zu kaufen!',
			account: {
				email: '',
				password: '',
			},
			isSuccess: false,
			isError: false,
			errMsg: '',
			errorStrings: {
				'auth/user-not-found': 'Es existiert kein User mit dieser Email-Adresse.',
				'auth/wrong-password': 'Falsches Passwort',
			},
		}
	},
	methods: {
		login() {
			this.$store.dispatch('users/login', this.account).catch((err) => {
				this.isError = true
				this.errMsg = this.errorStrings[err.code]
				console.log(err)
			})
			this.isSuccess = true
			setTimeout(() => {
				this.$router.push('/user/dashboard')
			}, 1500)
		},
	},
	mounted() {
		this.$store.commit('pagetitle/change', 'Login')
	},
}
</script>

<style lang="sass" scoped>
.errorMsg
	p
		color: $c-red
.login-panel
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
