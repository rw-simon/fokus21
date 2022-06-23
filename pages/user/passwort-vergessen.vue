<template>
	<div class="wrapper">
		<div class="container">
			<div v-if="!sent">
				<h1>Passwort vergessen</h1>
				<hr />
				<form>
					<input placeholder="Email" type="email" v-model="email" />
				</form>
				<div>
					<hr />
					<!-- <nuxt-link to="/register" class="forgot-password"> Neu Registrieren</nuxt-link> | -->
					<a class="button button-red" @click="forgotPassword">Passwort vergessen</a>
				</div>
			</div>
			<div v-else>
				<h1>Passwort erfolgreich zurückgesetzt</h1>
				<p>Wir haben Ihnen eine Email geschickt, mit welchem Sie Ihr Passwort neu setzen können.</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			email: '',
			sent: false,
		}
	},
	methods: {
		forgotPassword() {
			this.$fire.auth
				.sendPasswordResetEmail(this.email)
				.then(() => {
					// Password reset email sent!
					// ..
					this.sent = true
					console.log('sent')
				})
				.catch((error) => {
					var errorCode = error.code
					var errorMessage = error.message
					// ..
				})
		},
	},
	mounted() {
		this.$store.commit('pagetitle/change', 'Passwort vergessen')
	},
}
</script>
