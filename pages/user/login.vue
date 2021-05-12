<template>
	<div class="wrapper">
		<div class="container">
			<h1>Login</h1>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.commit('pagetitle/change', 'Login')
	}
}
</script>

<style></style>
