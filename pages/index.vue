<template>
	<div class="isHome wrapper">
		<div class="container">
			<div class="page-title">
				<h1><span>Fokus</span><span>Berufsbildung</span></h1>
				<h2>24. Juni 2021 · Live aus der Parkarena Winterthur</h2>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'index',
	head: {
		title: 'Fokus Berufsbildung | Lernen – ein breiter Horizont'
	},
	data() {
		return {}
	},
	mounted() {
		this.$store.commit('pagetitle/change', '')
	}
}
</script>

<style lang="sass" scoped>
.wrapper
	height: 100vh
	margin: 0
.container
	color: white
	width: 75vw
	.page-title
		margin-bottom: 6rem // visual center
		@include mobile
			transform: rotate(-90deg)
			margin-left: -10rem
		h1
			font-size: 7rem
			line-height: .9em
			text-transform: uppercase
			span
				display: block
			@include tablet
				font-size: 5rem
			@include mobile
				font-size: 4rem
</style>
