<template>
	<div class="wrapper">
		<div class="container">
			<h1>Programm 2022</h1>
			<a target="_blank" href="#" class="button">Herunterladen</a>
			<div style="margin-top: 2rem">
				<client-only>
					<div class="swiper-pagination"></div>
					<swiper class="swiper" :options="swiperOption">
						<swiper-slide>
							<div class="panel">
								<h3 class="time">08:30</h3>
								<h2>Begr&uuml;ssungskaffee</h2>
								<div>
									<p>Orientierung, Ankommen, Informationen</p>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">09:00</h3>
								<h2>Willkommen Fokus Berufsbildung 2022</h2>
								<div class="details">
									<p>Moderation</p>
									<div>
										<nuxt-link to="/experten/nicole-fritschi">Nicole Fritschi</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">09:10</h3>
								<h2>Die Bildungsstadt Winterthur gr&uuml;sst</h2>
								<div class="details">
									<p>Referent</p>
									<div>
										Michael K&uuml;nzle
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">09:20</h3>
								<nuxt-link to="/programm/die-berufsbildung-staerken"
									><h2>Die Berufsbildung st&auml;rken</h2></nuxt-link
								>
								<div class="details">
									<p>Referent</p>
									<div>
										<nuxt-link to="/experten/nick-schatzmann">Nick Schatzmann</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">09:50</h3>
								<h2>BB und Lernende im Bühnentanz erleben</h2>
								<div class="details">
									<p>Vorf&uuml;hrung</p>
									<div>
										<a href="https://musicalfactory.ch/" target="_blank">Musical Factory</a>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel pause">
								<h3 class="time">10:00</h3>
								<h2>Pause</h2>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel pause">
								<h3 class="time">10:30</h3>
								<h2>Workshops</h2>
								<div class="workshop">
									<nuxt-link to="/programm/kv-reform-2023-wo-stehen-wir"
										><h3>KV Reform 2023 – wo stehen wir</h3></nuxt-link
									>
									<nuxt-link to="/experten/michael-kraft">Michael Kraft</nuxt-link>
								</div>
								<div class="workshop">
									<nuxt-link to="/programm/n47e8-so-lernen-wir"
										><h3>N47e8 – so lernen wir!</h3></nuxt-link
									>
									<nuxt-link to="/experten/claudia-hug">Claudia Hug</nuxt-link>,
								</div>
								<div class="workshop">
									<nuxt-link to="/programm/berufsbilder-im-wandel-die-anforderungen-an-uns"
										><h3>Berufsbilder im Wandel – die Anforderungen an uns</h3></nuxt-link
									>
									<nuxt-link to="/experten/dietmar-eglseder">Dietmar Eglseder</nuxt-link>
								</div>
								<div class="workshop">
									<nuxt-link to="/programm/young-talents-lernende-gewinnen"
										><h3>Young Talents – Lernende gewinnen</h3></nuxt-link
									>
									<nuxt-link to="/experten/michael-jacobsen">Michael Jacobsen</nuxt-link>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel pause">
								<h3 class="time">11:45</h3>
								<h2>Mittag</h2>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">13:00</h3>
								<h2>Anmoderation</h2>
								<div class="details">
									<p>Referentin</p>
									<div>
										<nuxt-link to="/experten/nicole-fritschi">Nicole Fritschi</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">13:05</h3>
								<h2>Lebenskompetenz schl&auml;gt Intelligenz</h2>
								<div class="details">
									<p>Referentin</p>
									<div>
										Margrit Stamm
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">13:50</h3>
								<h2>3 Jugendliche erz&auml;hlen von ihrem Weg in die Berufsbildung</h2>
								<div class="details">
									<p>Referenten</p>
									<div>
										<nuxt-link to="/experten/nicole-fritschi">Nicole Fritschi</nuxt-link>
										<nuxt-link to="/experten/simon-hausammann">Simon Hausammann</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel pause">
								<h3 class="time">14:15</h3>
								<h2>Workshops</h2>
								<div class="workshop">
									<nuxt-link to="/programm/die-4-ks-lernende-motivieren"
										><h3>Die 4 K’s - Lernende motivieren</h3></nuxt-link
									>
									<nuxt-link to="/experten/vera-class">Vera Class</nuxt-link>
								</div>
								<div class="workshop">
									<nuxt-link
										to="/programm/unsere-rollen-vielfaeltig-interessant-und-doch-im-spannungsfeld"
										><h3>
											Unsere Rollen – vielf&auml;ltig, interessant und doch im Spannungsfeld
										</h3></nuxt-link
									>
									<nuxt-link to="/experten/christoph-weber">Christoph Weber </nuxt-link>,
									<nuxt-link to="/experten/simon-hausammann">Simon Hausammann</nuxt-link>
								</div>
								<div class="workshop">
									<nuxt-link
										to="/programm/erfolgreiches-coachen-die-adaption-in-den-berufsbildungsalltag"
										><h3>
											Erfolgreiches Coachen - die Adaption in den Berufsbildungsalltag
										</h3></nuxt-link
									>
									<nuxt-link to="/experten/stefan-meienberg">Stefan Meienberg</nuxt-link>
								</div>
								<div class="workshop">
									<h3>
										Ausbilden mit klarem Ziel – was wir von Planzer und einander lernen k&ouml;nnen
									</h3>
									Simon von Arx
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">15:30</h3>
								<h2>
									Anhand der digitalen Plattform den gemeinsamen Lernprozess reflektieren
								</h2>
								<div class="details">
									<p>Referent</p>
									<div>
										<nuxt-link to="/experten/nicole-fritschi">Nicole Fritschi</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">15:45</h3>
								<h2>
									BB und Lernende aus dem Instrumentenbau erleben
								</h2>
								<div class="details">
									<p>Referent</p>
									<div>
										<a href="https://musicalfactory.ch/" target="_blank">Musical Factory</a>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">16:00</h3>
								<h2>Abschluss & Ausblick 2023</h2>
								<div class="details">
									<p>Referent</p>
									<div>
										<nuxt-link to="/experten/nicole-fritschi">Nicole Fritschi</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide></swiper-slide>
					</swiper>
				</client-only>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '2021',
	head: {
		title: 'Programm | Fokus Berufsbildung 2022'
	},
	data: () => ({
		swiperOption: {
			slidesPerView: 1,
			spaceBetween: 64,
			loop: false,
			mousewheel: true,
			direction: 'horizontal',
			pagination: {
				el: '.swiper-pagination',
				type: 'progressbar'
			},
			breakpoints: {
				960: {
					slidesPerView: 2.2,
					freeMode: true,
					pagination: false
				}
			}
		}
	}),
	mounted() {
		this.$store.commit('pagetitle/change', 'Programm 2021')
	}
}
</script>

<style lang="sass" scoped>
.button
	background: $c-red
.container
	width: 75vw
	@include mobile
		height: 66vh
.panel
	padding: 2rem
	border: 1px solid $c-gray-light
	border-radius: 8px
	@include mobile
		padding: 1rem
	&.pause
		border: none
	.details
		display: grid
		grid-template-columns: 100px 1fr
		align-items: start
		p
			margin: 0
		a
			display: block
.workshop
	margin-top: 2rem
	h3
		font-weight: bold
div.swiper-pagination
	@include mobile
		position: relative
		height: 4px
		margin-bottom: 2rem
		margin-top: 2rem
</style>
