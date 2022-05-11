<template>
	<div class="wrapper">
		<div class="container">
			<h1>Registration Teilnahme 2022</h1>
			<p style="font-weight: bold; font-size: 1.5rem">
				Lernen – ein breiter Horizont; es warten spannende Impulsreferate von erfahrenen Experten, eine breite
				Palette an gewinnbringenden Workshops und ein abgestimmtes Rahmenprogramm auf Sie.
			</p>
			<p>
				<strong
					>Datum: 4. Oktober 2022<br />Ort:
					<a href="https://kongresszentrum-parkarena.ch/" target="_blank">Parkarena Winterthur</a
					><br />Teilnahmegebühr: CHF 250.–</strong
				>
			</p>
			<p>Vorteile:</p>
			<ul>
				<li>Platz gesichert</li>
				<li>Vorreservierungsrecht Workshop</li>
				<li>Laufend Infos und Updates</li>
			</ul>
			<p>
				Melden Sie sich bereits jetzt unverbindlich für die zweite Ausgabe von Fokus Berufsbildung an! Damit
				haben Sie Ihren Platz am Event auf sicher und Sie kommen in den Genuss des exklusiven
				Vorreservierungsrechts bei unserem Workshopangebot. Ausserdem halten wir Sie bezüglich News, Programm
				und Details des Anlasses laufend up-to-date..
			</p>
			<hr />
			<strong v-html="registered ? 'Danke für Ihre Anmeldung!' : 'Jetzt unverbindlich registrieren!'" /><br />
			<br />
			<form @submit.prevent="sendMailToSimon" class="register" v-if="!registered">
				<select required name="anrede" id="">
					<option value="" disabled selected>Anrede</option>
					<option value="Herr">Herr</option>
					<option value="Frau">Frau</option>
					<option value="Andere">Andere</option></select
				><span></span>
				<input type="text" placeholder="Vorname" v-model="vorname" required />
				<input type="text" placeholder="Name" v-model="name" required />
				<input type="email" placeholder="Email" v-model="email" required />
				<input type="text" placeholder="Unternehmen" v-model="unternehmen" required />
				<input style="cursor: pointer" type="submit" value="Anmelden" />
			</form>
			<div v-else>
				<p v-html="message" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'teilnahme',
	data() {
		return {
			registered: false,
			message:
				'Besten Dank für Ihre Registration. Wir werden uns bei Ihnen melden, sobald weitere Informationen und Anmeldemöglichkeiten verfügbar sind.',
			email: '',
			name: '',
			vorname: '',
			tel: '',
			unternehmen: '',
			anrede: '',
		}
	},
	methods: {
		sendMailToSimon() {
			this.$fire.firestore
				.collection('mail')
				.doc('fokus21_prereg_' + this.email + '_' + Date.now().toString())
				.set({
					to: ['thebetaworld@gmail.com'], //this.$store.state.users.user.email.toString(),
					// bcc: ['admin@rechtwinklig.ch'],
					message: {
						subject: 'Neue Anmeldung für Fokus 21',
						html: `${this.anrede} Name ${this.vorname} ${this.name}<br />Email ${this.email}<br />Firma ${this.unternehmen}<br />`,
					},
				})
				.then(() => {
					this.register()
				})
		},
		register() {
			let v = this
			setTimeout(function () {
				v.registered = true
				console.log('registered')
			}, 1000)
		},
	},
	mounted() {
		this.$store.commit('pagetitle/change', 'Teilnahme')
	},
}
</script>

<style <style lang="sass" scoped>
.register
	display: grid
	grid-template-columns: 1fr 1fr
	gap: 1rem 2rem
	align-items: center
	input, select
		font-size: 1.25rem
	@include mobile
		grid-template-columns: 1fr
.registerlink
	font-size: 1.5rem
	cursor: pointer
	margin: 0
	span
		display: inline-block
		width: 3rem
		text-align: right
		padding-right: 1rem
		transition: padding-right 200ms ease-out
		filter: invert(1)
	&:hover
		span
			padding-right: 0
</style>
