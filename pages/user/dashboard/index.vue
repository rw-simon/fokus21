<template>
	<div class="wrapper">
		<div class="container">
			<h1>Dashboard</h1>
			<client-only>
				<iframe
					width="100%"
					height="640"
					src="https://www.youtube.com/embed/shsUMar7_ks?controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</client-only>
			<div style="width:100vw; height: 100vh; position: fixed; top: 0; left: 0"></div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$store.commit('pagetitle/change', 'Dashboard')
	}
}
</script>

<style></style>
