<template>
	<div class="wrapper">
		<div class="container">
			<h1>Register</h1>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.commit('pagetitle/change', 'Registrieren')
	}
}
</script>

<style></style>
