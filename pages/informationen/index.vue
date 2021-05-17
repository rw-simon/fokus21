<template>
	<div class="wrapper">
		<div class="container">
			<nuxt-link :to="'/informationen/' + info.slug" v-for="info in infos" :key="info['id']">
				<p class="large">{{ info.title.rendered }}</p>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'informationen',
	head() {
		return {
			title: 'Informationen | Fokus Berufsbildung 2021'
		}
	},
	async asyncData({ store }) {
		// Checks if there is at least 2 infos (if you're calling the single info page directly, the array is length 1 and therefore incomplete)
		if (store.getters.getInfos().length < 2) {
			// If store infos is empty, get all infos ...
			const infoReq = await axios.get('https://admin.fokus21.rwdev.ch/wp-json/wp/v2/infos?per_page=100')
			// ... and store them in vuex
			store.dispatch('setInfos', infoReq.data)
		}
		// Return values from store
		return { infos: store.getters.getInfos() }
	},
	mounted() {
		this.$store.commit('pagetitle/change', 'Informationen')
	}
}
</script>

<style lang="sass" scoped>
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
