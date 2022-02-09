<template>
	<div class="isHome wrapper">
		<div class="container">
			<div class="page-title">
				<div class="inner-title">
					<h1><span>Fokus</span><span>Berufsbildung</span></h1>
					<h2>Lernen – ein breiter Horizont</h2>
				</div>
			</div>
		</div>
		<div class="anmelden">
			<nuxt-link to="/informationen/teilnahme"
				>Teilnahme<span><img class="icon" src="/icons/icon_arrow_right.svg" alt=""/></span
			></nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'index',
	head() {
		return {
			title: 'Fokus Berufsbildung | Lernen – ein breiter Horizont'
		}
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
.anmelden
	position: fixed
	bottom: 2rem
	right: 2rem
	z-index: 99999999
	a
		color: white
		font-size: 2rem
		span
			display: inline-block
			width: 3rem
			text-align: right
			padding-right: 1rem
			transition: padding-right 200ms ease-out
		&:hover
			span
				padding-right: 0
.wrapper
	height: 100vh
	margin: 0
.container
	color: white
	width: 75vw
	.page-title
		margin-bottom: 6rem // visual center
		@include mobile
			.inner-title
				transform: rotate(-90deg)
				position: fixed
				bottom: 16rem
				left: -9rem
		h1
			font-size: 8rem
			line-height: .9em
			text-transform: uppercase
			span
				display: block
			@include tablet
				font-size: 5rem
			@include mobile
				font-size: 3rem
</style>
