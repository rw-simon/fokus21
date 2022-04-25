<template>
	<div class="wrapper">
		<div class="container">
			<h1>Teilnahme 2022</h1>
			<p style="font-weight: bold; font-size:1.5rem">
				Lernen – ein breiter Horizont; es warten spannende Impulsreferate von erfahrenen Experten, eine breite
				Palette an gewinnbringenden Workshops und ein abgestimmtes Rahmenprogramm auf Sie.
			</p>
			<p>
				Melden Sie sich bereits jetzt unverbindlich für die erste Ausgabe von Fokus Berufsbildung an! Damit
				haben Sie Ihren Platz am Event auf sicher und Sie kommen in den Genuss des exklusiven
				Vorreservierungsrechts bei unserem Workshopangebot. Ausserdem halten wir Sie bezüglich News, Programm
				und Details des Anlasses laufend up-to-date..
			</p>
			<hr />
			<strong>Jetzt unverbindlich registrieren!</strong><br />
			<br />
			<form @submit.prevent="register" class="register" v-if="!registered">
				<select name="anrede" id="">
					<option value="" disabled selected>Anrede</option>
					<option value="">Herr</option>
					<option value="">Frau</option>
					<option value="">Andere</option> </select
				><span></span>
				<input type="text" placeholder="Vorname" v-bind="vorname" required />
				<input type="text" placeholder="Name" v-bind="nachname" required />
				<input type="email" placeholder="Email" v-bind="email" required />
				<input type="text" placeholder="Unternehmen" v-bind="unternehmen" required />
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
			unternehmen: ''
		}
	},
	methods: {
		register() {
			let v = this
			setTimeout(function() {
				v.registered = true
				console.log('registered')
			}, 1000)
		}
	},
	mounted() {
		this.$store.commit('pagetitle/change', 'Teilnahme')
	}
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
