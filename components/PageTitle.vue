<template>
	<h1>{{ this.$store.state.pagetitle.title }}</h1>
</template>

<script>
export default {
	name: 'page-title'
}
</script>

<style lang="sass" scoped>
h1
	font-size: 2rem
	position: absolute
	top: 48% // visual center
	left: 2rem
	transform: rotate(-90deg) translateX(-50%)
	transform-origin: top left
	@include mobile
		display: none
</style>
