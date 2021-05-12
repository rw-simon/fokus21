<template>
	<div class="wrapper">
		<div class="container">
			<h1>Programm</h1>
		</div>
	</div>
</template>

<script>
export default {
	name: 'programm',
	mounted() {
		this.$store.commit('pagetitle/change', 'Programm')
	}
}
</script>

<style></style>
