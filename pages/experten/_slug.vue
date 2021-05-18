<template>
	<div class="wrapper">
		<div class="container">
			<div class="grid">
				<div class="content">
					<h1>{{ expert.title.rendered }}</h1>
					<h2>{{ expert.acf.details.jobtitle }}</h2>
					<div v-html="expert.acf.details.description"></div>
					<SocialMedia :links="'HUHU'" />
				</div>
				<div class="image">
					<img :src="expert.acf.image" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'expert-slug',
	head() {
		return {
			title: this.expert.title.rendered + ' | Fokus Berufsbildung 2021'
		}
	},
	async asyncData({ store, params }) {
		if (!store.getters.getExpertBySlug(params.slug)) {
			// If store expert is empty, get it by slug from server ...
			const expertReq = await axios.get(
				`https://admin.fokus21.rwdev.ch/wp-json/wp/v2/experts?slug=${params.slug}`
			)
			// ... and store it in vuex
			store.dispatch('addExpert', expertReq.data[0])
			// Return values from store
		}
		return { expert: store.getters.getExpertBySlug(params.slug) }
	},
	mounted() {
		this.$store.commit('pagetitle/change', 'Experten')
	}
}
</script>

<style lang="sass" scoped>
.container
	width: 75vw
.grid
	display: grid
	grid-template-columns: 1fr 1fr
	gap: 8rem
	align-items: center
	@include mobile
		grid-template-columns: 1fr
		gap: 0
	.content
		padding-bottom: 4rem
		h2
			font-weight: bold
			font-size: 1.25rem
			color: $c-gray
		@include mobile
			grid-row: 2
	.image
		@include mobile
			grid-row: 1
		img
			object-fit: cover
			width: 100%
			height: 66vh
			@include mobile
				height: 33vh
</style>
