<template>
	<div>
		<p>{{ links }}</p>
		<span class="icon" v-for="icon in links" :key="icon">
			{{ icon }}
		</span>
	</div>
</template>

<script>
export default {
	name: 'social-media',
	props: ['links']
}
</script>

<style></style>
