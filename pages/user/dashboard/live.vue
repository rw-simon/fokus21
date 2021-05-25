<template>
	<!-- <div class="wrapper"> -->
	<div class="container">
		<div class="tabs">
			<p>
				INFOS Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum excepturi et nesciunt temporibus
				omnis maiores modi harum reprehenderit laudantium. Perferendis fugiat eius possimus saepe quaerat,
				aspernatur error! At, quisquam eum!
			</p>
			<h4>Evtl. Nav between rooms?</h4>
			<a class="button" href="#" @click="active = 'miro'">Miro</a>
			<a class="button" href="#" @click="active = 'slido'">Slido</a>
		</div>
		<client-only>
			<transition-group name="streams">
				<iframe
					v-if="active == 'miro'"
					key="1"
					width="100%"
					src="https://miro.com/app/live-embed/o9J_lDP5m0Q=/"
					frameBorder="0"
					scrolling="no"
					allowFullScreen
				></iframe>
				<iframe
					v-if="active == 'slido'"
					key="2"
					src="https://app.sli.do/event/lyuupa4f"
					height="100%"
					width="100%"
					frameBorder="0"
					style="min-height: 560px;"
					title="Slido"
				></iframe>
			</transition-group>
		</client-only>
	</div>
	<!-- </div> -->
</template>

<script>
export default {
	layout: 'live',
	data: () => ({
		active: 'miro'
	})
}
</script>

<style lang="sass" scoped>
.button
	background-color: $c-red
.container
	width: 100vw
	padding: 2rem
	height: calc(100vh - 120px)
	margin-top: 120px
	margin-left: 0
	display: grid
	gap: 2rem
	grid-template-columns: 250px 1fr
	iframe
		height: 100%
</style>
