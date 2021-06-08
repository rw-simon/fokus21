<template>
	<div class="wrapper">
		<div class="container">
			<h1>Login</h1>
			<form @submit.prevent="login" class="register">
				<input type="email" required v-model="account.email" class="full" placeholder="Email" />
				<input type="password" required v-model="account.password" class="full" placeholder="Passwort" />
				<input :class="{ inactive: isSuccess }" type="submit" value="Einloggen" />
				<nuxt-link to="/register" class="forgot-password"> Neu Registrieren</nuxt-link>
				<a href="#" @click="forgotPassword"> Passwort vergessen</a>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			subtitle: 'Melde dich jetzt an, um dein Ticket zu kaufen!',
			account: {
				email: '',
				password: ''
			},
			isSuccess: false,
			isError: false,
			errMsg: ''
		}
	},
	methods: {
		login() {
			this.$store.dispatch('users/login', this.account).catch(err => {
				this.isError = true
				this.errMsg = err.message
			})
			this.isSuccess = true
			setTimeout(() => {
				this.$router.push('/user/dashboard')
			}, 1500)
		},
		forgotPassword() {
			auth.sendPasswordResetEmail(this.account.email)
				.then(res => {
					this.isError = true
					this.errMsg = 'Wir haben Ihnen eine Email zur Passwort Zurücksetzung geschickt!'
				})
				.catch(err => {
					this.isError = true
					this.errMsg = 'Bitte Email-Adresse eintragen'
				})
		}
	},
	mounted() {
		this.$store.commit('pagetitle/change', 'Login')
	}
}
</script>

<style></style>
