<template>
	<footer :class="{ home: isHome }">
		<div :class="{ 'social-links': true, inverted: isHome }">
			<a href="#"><img class="icon-large" src="/icons/icon_facebook.svg" alt=""/></a>
			<a href="#"><img class="icon-large" src="/icons/icon_twitter.svg" alt=""/></a>
			<a href="#"><img class="icon-large" src="/icons/icon_linkedin.svg" alt=""/></a>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'overlay-footer',
	data() {
		return { isHome: true }
	},
	mounted() {
		if ($nuxt.$route.name == 'index') {
			this.isHome = true
		} else {
			this.isHome = false
		}
	},
	watch: {
		$route() {
			if ($nuxt.$route.name == 'index') {
				this.isHome = true
			} else {
				this.isHome = false
			}
		}
	}
}
</script>

<style lang="sass" scoped>
footer
	padding: 2rem
	display: grid
	align-items: center
	grid-template-columns: auto auto
	position: fixed
	bottom: 0
	width: 100%
	z-index: 999
	@include mobile
		padding: 1rem
		background: white
		box-shadow: 0 -50px 20px white
		&.home
			background: none
			box-shadow: none
	.social-links
		display: grid
		grid-template-columns: repeat(3, 2rem)
		gap: 1rem
		transition: filter 1s
		&.inverted
			filter: invert(1)
</style>
