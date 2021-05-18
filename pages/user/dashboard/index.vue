<template>
	<div class="wrapper">
		<div class="container">
			<section class="settings">
				<nuxt-link to="/user/einstellungen">Einstellungen</nuxt-link>
				<nuxt-link to="/asd">Abmelden</nuxt-link>
			</section>
			<div class="grid">
				<div>
					<div class="panel">
						<div class="profile">
							<h3>Willkommen zurück</h3>
							<div class="avatar">
								<img src="/icons/profile/avatar_placeholder_male.jpg" alt="" />
								<h2>{{ user.name }}</h2>
							</div>
							<hr />
							<h4>Kontakt</h4>
							<p>Marktgasse 42<br />8400 Winterthur</p>
							<p>
								+41 79 684 27 36 <br />
								simon.fischer@rechtwinklig.ch
							</p>
						</div>
					</div>
				</div>
				<div>
					<div class="panel">
						<div class="next-event">
							<h3>Nächster Event</h3>
							<h2>Lernen – ein breiter Horizont</h2>
							<a class="button button-red" href="#">Jetzt anmelden</a>
							<nuxt-link to="/programm" class="button button-blue">Programm</nuxt-link>
							<hr />
							<div class="event-details">
								<p>I</p>
								<p>24. Juni 2021</p>
								<p>I</p>
								<p>Live aus der Parkarena</p>
							</div>
							<hr />
							<div class="downloads">
								<h4>Downloads &amp; Videos</h4>
								<a href="#"
									><span><img src="/icons/icon_filepdf.svg" alt=""/></span>Übersicht Tagesplan</a
								>
								<a href="#"
									><span><img src="/icons/icon_filepdf.svg" alt=""/></span>Anleitung &amp;
									Installation Miro</a
								>
								<a href="#"
									><span><img src="/icons/icon_filepdf.svg" alt=""/></span>Expertenliste</a
								>
								<a href="#"
									><span><img src="/icons/icon_play.svg" alt=""/></span>Einleitung Nicole Fritschi</a
								>
								<a href="#"
									><span><img src="/icons/icon_play.svg" alt=""/></span>Interview mit Michael
									Kellenberger</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		user: {
			name: 'Simon Fischer'
		}
	}),
	mounted() {
		this.$store.commit('pagetitle/change', 'Dashboard')
	}
}
</script>

<style lang="sass" scoped>
.downloads
	a
		display: block
		transition: transform 200ms ease-out
		padding: .5rem
		span
			margin-right: .5rem
			vertical-align: middle
			img
				height: 1rem
		&:hover
			transform: translateX(.5rem)
.event-details
	display: grid
	grid-template-columns: 2rem 1fr
	gap: 1rem
	p
		margin: 0
.container
	width: 66vw
.settings
	text-align: right
	a
		padding: 1rem
		display: inline-block
.grid
	display: grid
	grid-template-columns: 1fr 1fr
	gap: 4rem
	align-items: start
	@include mobile
		grid-template-columns: 1fr
		gap: 0
	.panel
		border: 1px solid $c-gray-light
		border-radius: 6px
		padding: 2rem
		margin-bottom: 2rem
	.profile
		.avatar
			display: grid
			grid-template-columns: 4rem 1fr
			gap: 1rem
			align-items: center
			img
				width: 100%
				border-radius: 50%
</style>
