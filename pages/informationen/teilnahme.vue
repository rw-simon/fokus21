<template>
	<div class="wrapper">
		<div class="container">
			<h1>Teilnahme 2022</h1>
			<p style="font-weight: bold; font-size:1.5rem">
				Der Fokus Berufsbildungs Event wird auch diese Jahr wieder durchgeführt. Dies mit dem Schwerpunkt:
				Lernen – ein breiter Horizont. Über Örtlichkeit und Datum werden wir im Frühling 2022 informieren.
			</p>
			<p>
				Aufgrund der herausfordernden Bedingungen für Anlässe zeigt Fokus Berufsbildung neben den inhaltlichen
				Themen auch eine reiche Auswahl an digitalen Möglichkeiten. <br /><br />
				Die Teilnahme steht allen Interessierten offen.
				<br />
				<br />
				Interessierte können sich ab Frühling 2022 an den Event anmelden.
				<br />
				<br />
				Wir behalten uns vor, den Event aufgrund der aktuellen Situation digital durchzuführen. Die
				Teilnahmegebühr beträgt <strong>CHF 250.–</strong> und beinhaltet neben den Plenumsveranstaltungen
				diverse Workshops und Interviews mit Berufsbildungs-Experten.
			</p>
			<hr />
			<strong>Gerne informieren wir Sie, sobald die Anmeldung verfügbar ist.</strong><br />
			<br />
			<form @submit.prevent="register" class="register" v-if="!registered">
				<input type="email" placeholder="Email" v-bind="email" required />
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
		return{
			registered: false,
			message: 'Besten Dank für Ihre Registration. Wir werden Ihnen eine Email zustellen, sobald Sie sich für den Event FOKUS 2022 Anmelden können.',
			email: '',
		}
	},
	methods: {
		register() {
			let v = this
			setTimeout(function() {
				v.registered = true
				console.log("registered");
			}, 1000)
		},
	}
}
</script>

<style <style lang="sass" scoped>
.register
	display: grid
	grid-template-columns: 1fr 1fr
	gap: 4rem
	align-items: center
	input
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
