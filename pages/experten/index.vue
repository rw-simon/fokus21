<template>
	<div class="wrapper">
		<div class="container">
			<!-- <h1>Experten</h1> -->
			<nuxt-link :to="'/experten/' + e.slug" v-for="e in experts" :key="e['id']">
				<p class="large">{{ e.title.rendered }}</p>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'experten',
	head() {
		return {
			title: 'Experten | Fokus Berufsbildung 2021',
		}
	},
	async asyncData({ store }) {
		// Checks if there is at least 2 experts (if you're calling the single expert page directly, the array is length 1 and therefore incomplete)
		if (store.getters.getExperts().length < 2) {
			// If store experts is empty, get all experts ...
			const expertReq = await axios.get(
				'https://admin.fokus21.rwdev.ch/wp-json/wp/v2/experts?per_page=100&orderby=title&order=asc'
			)
			// ... and store them in vuex
			store.dispatch('setExperts', expertReq.data)
		}
		// Return values from store
		return { experts: store.getters.getExperts() }
	},
	mounted() {
		this.$store.commit('pagetitle/change', 'Experten')
	},
}
</script>

<style lang="sass" scoped>
.container
	padding-bottom: 4rem
a
	transition: transform 200ms ease-out
	display: block
	p
		transition: color 100ms ease-out
	&:hover
		transform: translateX(1rem)
		p
			color: $c-red
</style>
