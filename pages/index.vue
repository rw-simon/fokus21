<template>
	<div class="isHome wrapper">
		<div class="container">
			<div class="page-title">
				<div class="inner-title">
					<h1><span>Fokus</span><span>Berufsbildung</span></h1>
					<h2>24. Juni 2021 · Live aus der Parkarena Winterthur</h2>
				</div>
			</div>
		</div>
		<div class="anmelden">
			<a
				href="mailto:info@fokus-berufsbildung.ch?subject=Anmeldung%20Fokus%20Berufsbildung%202021%20:%20Lernen–%20ein%20breiter%20Horizont&body=Guten%20Tag%0D%0A%0D%0AIch%20möchte%20mich%20gerne%20für%20den%20Event%20Fokus%20Berufsbildung%202021:%20Lernen%20–%20ein%20breiter%20Horizont%20anmelden.%0D%0A%0D%0AMeine%20Kontaktangaben:%20%0D%0AName:%0D%0AStrasse%20Nr.:%0D%0APLZ%20Ort:%0D%0ATelefon:%0D%0A%0D%0AFreundliche%20Grüsse"
				>Jetzt Anmelden<span><img class="icon" src="/icons/icon_arrow_right.svg" alt=""/></span
			></a>
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
			font-size: 7rem
			line-height: .9em
			text-transform: uppercase
			span
				display: block
			@include tablet
				font-size: 5rem
			@include mobile
				font-size: 3rem
</style>
