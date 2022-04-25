<template>
	<div class="wrapper">
		<div class="container">
			<h1 v-html="event.title.rendered" />
			<p v-html="event.acf.description" />
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'programm-slug',
	head() {
		return {
			title: this.event.title.rendered + ' | Fokus Berufsbildung 2021'
		}
	},
	async asyncData({ store, params }) {
		if (!store.getters.getEventBySlug(params.slug)) {
			// If store expert is empty, get it by slug from server ...
			const eventReq = await axios.get(`https://admin.fokus21.rwdev.ch/wp-json/wp/v2/event?slug=${params.slug}`)
			// ... and store it in vuex
			store.dispatch('addEvent', eventReq.data[0])
			// Return values from store
		}
		return {
			event: store.getters.getEventBySlug(params.slug)
		}
	}
}
</script>
<style lang="sass" scoped></style>
