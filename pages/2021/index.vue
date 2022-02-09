<template>
	<div class="wrapper">
		<div class="container">
			<h1>Fokus 2021</h1>
			<nuxt-link to="/programm">Programm</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'fokus-2021',
	mounted() {
		this.$store.commit('pagetitle/change', 'Fokus 2021')
	}
}
</script>

<style></style>
