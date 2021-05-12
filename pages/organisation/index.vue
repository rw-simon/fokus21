<template>
	<div class="wrapper">
		<div class="container"><h1>Organisation</h1></div>
	</div>
</template>

<script>
export default {
	name: 'organisation',
	mounted() {
		this.$store.commit('pagetitle/change', 'Organisation')
	}
}
</script>

<style></style>
