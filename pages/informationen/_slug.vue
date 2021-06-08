<template>
	<div class="wrapper">
		<div class="container">
			<div class="grid">
				<div class="content">
					<h1>{{ info.title.rendered }}</h1>
					<div v-html="info.acf.content"></div>
					<!-- <social-media :links="'HUHU'" /> -->
				</div>
				<div class="image">
					<img v-if="info.acf.image" :src="info.acf.image" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'informationen-slug',
	head() {
		return {
			title: this.info.title.rendered + ' | Fokus Berufsbildung 2021'
		}
	},
	async asyncData({ store, params }) {
		if (!store.getters.getInfoBySlug(params.slug)) {
			// If store expert is empty, get it by slug from server ...
			const infoReq = await axios.get(
				`https://admin.fokus21.rwdev.ch/wp-json/wp/v2/informationen?slug=${params.slug}`
			)
			// ... and store it in vuex
			store.dispatch('addInfo', infoReq.data[0])
			// Return values from store
		}
		return { info: store.getters.getInfoBySlug(params.slug) }
	},
	mounted() {
		this.$store.commit('pagetitle/change', 'Informationen')
	}
}
</script>

<style lang="sass" scoped>
.container
	width: 75vw
p
	font-weight: 200
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
		h1
			font-size: 3rem
			@include mobile
				font-size: 2rem
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
