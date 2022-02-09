<template>
	<header :class="{ home: isHome }">
		<div>
			<nuxt-link to="/">
				<img :class="{ hide: isHome, logo: true }" src="/logo_color.png" alt="" />
			</nuxt-link>
		</div>
		<div class="control-area">
			<span>
				<!-- <nuxt-link to="/user/dashboard">
					<img :class="{ inverted: isHome }" src="/icons/icon_user.svg" alt="" />
				</nuxt-link> -->
			</span>
			<navigation-main-menu :isHome="isHome" />
		</div>
	</header>
</template>

<script>
export default {
	name: 'overlay-header',
	data() {
		return { isHome: false }
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
header
	padding: 1.5rem 2rem
	display: grid
	align-items: center
	grid-template-columns: auto auto
	position: fixed
	top: 0
	width: 100%
	z-index: 999
	@include mobile
		padding: 1rem
		background: white
		&.home
			background: none
			box-shadow: none
	img.logo
		width: 250px
		transition: opacity 500ms
		@include mobile
			width: 180px
		&.hide
			opacity: 0
	.control-area
		justify-self: end
		display: grid
		gap: 2rem
		grid-template-columns: auto auto
		span
			display: block
			cursor: pointer
			img
				width: 24px
				height: 24px
				-webkit-transition: -webkit-filter 1s
				transition: filter 1s
				&.inverted
					filter: invert(1)
</style>
