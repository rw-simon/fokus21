<template>
	<div class="wrapper">
		<div class="container">
			<h2>Hier gibt es nichts zu sehen…</h2>
			<h1>…und schon gar nichts zu lernen!</h1>
			<nuxt-link to="/">Zurück zur Startseite</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.commit('pagetitle/change', 'Seite nicht gefunden')
	}
}
</script>
<style lang="sass" scoped>
a
	font-weight: bold
	&:hover
		color: $c-red
</style>
