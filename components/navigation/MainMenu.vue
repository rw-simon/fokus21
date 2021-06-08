<template>
	<div>
		<span @click="toggleMenu">
			<img :class="{ inverted: isHome }" src="/icons/icon_menu_bars.svg" alt="" />
		</span>
		<nav :class="{ inverted: isHome, opened: menuOpen }" @mouseleave="menuOpen = false" @click="menuOpen = false">
			<transition-group name="menuitems">
				<nuxt-link v-if="menuOpen" key="1" to="/programm">
					Programm
				</nuxt-link>
				<nuxt-link v-if="menuOpen" key="2" to="/informationen">
					Informationen
				</nuxt-link>
				<nuxt-link v-if="menuOpen" key="3" to="/experten">
					Expert*innen
				</nuxt-link>
				<nuxt-link v-if="menuOpen" key="4" to="/organisation">
					Organisation
				</nuxt-link>
			</transition-group>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'main-menu',
	data() {
		return {
			menuOpen: false
		}
	},
	methods: {
		toggleMenu() {
			this.menuOpen = !this.menuOpen
		}
	},
	props: {
		isHome: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="sass" scoped>
nav
	position: absolute
	top: 6rem
	right: 2rem
	// @include mobile
	background: white
	margin-right: -2rem
	margin-top: -2rem
	transition: padding 400ms ease-in-out, height 300ms ease-in-out
	transition-delay: 350ms
	width: 75.1vw
	height: 0px
	@include mobile
		width: 100vw
	&.inverted
		background: none
		@include mobile
			background: $c-red
	&.opened
		height: 100vh
		transition-delay: 0ms
		padding: 2rem
	&.inverted
		color: white
		a:hover
			color: white
	a
		display: block
		font-size: 2rem
		text-align: right
		padding: .5rem
		&.nuxt-link-active
			color: $c-red
		&:hover
			transition: padding-right 200ms
			color: $c-red
			padding-right: 1rem
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
