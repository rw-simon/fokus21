<template>
	<div class="wrapper">
		<div class="container">
			<h1>Programm 2021</h1>
			<a
				target="_blank"
				href="https://admin.fokus21.rwdev.ch/wp-content/uploads/2021/06/fokus21-programm.pdf"
				class="button"
				>Herunterladen</a
			>
			<div style="margin-top: 2rem">
				<client-only>
					<div class="swiper-pagination"></div>
					<swiper class="swiper" :options="swiperOption">
						<swiper-slide>
							<div class="panel">
								<h3 class="time">08:30</h3>
								<nuxt-link to="/programm/vision-idee"><h2>Vision &amp; Idee</h2></nuxt-link>
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
								<h3 class="time">08:45</h3>
								<nuxt-link to="/programm/lernen-ein-breiter-horizont"
									><h2>Lernen – ein breiter Horizont P1</h2></nuxt-link
								>
								<div class="details">
									<p>Referent</p>
									<div>
										<nuxt-link to="/experten/andreas-saegesser">Andreas S&auml;gesser</nuxt-link>
										<nuxt-link to="/experten/roland-zueger">Roland Z&uuml;ger</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel pause">
								<h3 class="time">09:30</h3>
								<h2>Pause</h2>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">10:00</h3>
								<nuxt-link to="/programm/top-ausbildungsbetrieb"
									><h2>TOP Ausbildungsbetrieb</h2></nuxt-link
								>
								<div class="details">
									<p>Referent</p>
									<div>
										<nuxt-link to="/experten/thomas-rentsch">Thomas Rentsch</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel pause">
								<h3 class="time">10:30</h3>
								<h2>Workshops</h2>
								<div class="workshop">
									<nuxt-link to="/programm/entdeckendes-lernen"
										><h3>Entdeckendes Lernen</h3></nuxt-link
									>
									<nuxt-link to="/experten/thomas-rentsch">Thomas Rentsch</nuxt-link>
								</div>
								<div class="workshop">
									<nuxt-link to="/programm/wenn-lernende-das-zepter-uebernehmen"
										><h3>Wenn Lernende das Zepter übernehmen</h3></nuxt-link
									>
									<nuxt-link to="/experten/claudia-bartholet">Claudia Bartholet</nuxt-link>,
									<nuxt-link to="/experten/irene-gangwisch">Irene Gangwisch</nuxt-link>
								</div>
								<div class="workshop">
									<nuxt-link to="/programm/mit-sol-unterwegs"><h3>Mit Sol unterwegs</h3></nuxt-link>
									<nuxt-link to="/experten/michael-kellenberger">Michael Kellenberger</nuxt-link>
								</div>
								<div class="workshop">
									<nuxt-link to="/programm/schule-im-jahr-2021"
										><h3>Schule im Jahr 2021</h3></nuxt-link
									>
									<nuxt-link to="/experten/elsbeth-stamm">Elsbeth Stamm</nuxt-link>,
									<nuxt-link to="/experten/florian-schwarz">Florian Schwarz</nuxt-link>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">11:15</h3>
								<nuxt-link to="/programm/bewaeltigung-der-coronasituation"
									><h2>Task Force – Bewältigung der Coronasituation</h2></nuxt-link
								>
								<div class="details">
									<p>Referent</p>
									<div>
										<nuxt-link to="/experten/daniel-duttweiler">Dani Duttweiler</nuxt-link>
										<nuxt-link to="/experten/nick-schatzmann">Nick Schatzmann</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">11:50</h3>

								<h2>Zusammenfassung &amp; Programm Nachmittag</h2>

								<div class="details">
									<p>Referent</p>
									<div>
										<nuxt-link to="/experten/nicole-fritschi">Nicole Fritschi</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel pause">
								<h3 class="time">12:00</h3>
								<h2>Mittag</h2>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">13:00</h3>
								<nuxt-link to="/programm/lernen-ein-breiter-horizont-2"
									><h2>Lernen - ein breiter Horizont P2</h2></nuxt-link
								>
								<div class="details">
									<p>Referent</p>
									<div>
										<nuxt-link to="/experten/andreas-saegesser">Andreas S&auml;gesser</nuxt-link>
										<nuxt-link to="/experten/roland-zueger">Roland Z&uuml;ger</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">13:20</h3>
								<nuxt-link to="/programm/wenn-lernen-zur-herausforderung-wird"
									><h2>Wenn Lernen zur Herausforderung wird</h2></nuxt-link
								>
								<div class="details">
									<p>Referent</p>
									<div>
										<nuxt-link to="/experten/christoph-dueby">Christoph D&uuml;by</nuxt-link>
										<nuxt-link to="/experten/simon-hausammann">Simon Hausammann</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel pause">
								<h3 class="time">13:30</h3>
								<h2>Workshops</h2>
								<div class="workshop">
									<nuxt-link to="/programm/challenge-lernen-ads"
										><h3>Challenge Lernen - ADS</h3></nuxt-link
									>
									<nuxt-link to="/experten/regina-renggli">Regina Renggli</nuxt-link>
								</div>
								<div class="workshop">
									<nuxt-link to="/programm/mental-fit"><h3>Mental fit</h3></nuxt-link>
									<nuxt-link to="/experten/roger-erni">Roger Erni</nuxt-link>
								</div>
								<div class="workshop">
									<nuxt-link to="/programm/von-der-berufsweltmeisterin-lernen"
										><h3>Berufsweltmeisterin</h3></nuxt-link
									>
									<nuxt-link to="/experten/sonja-durrer">Sonja Durrer</nuxt-link>,
									<nuxt-link to="/experten/simon-hausammenn">Simon Hausammann</nuxt-link>
								</div>
								<div class="workshop">
									<nuxt-link to="/programm/selbstorganisiertes-lernen"
										><h3>Selbstorganisiertes Lernen</h3></nuxt-link
									>
									<nuxt-link to="/experten/elsbeth-stamm">Elsbeth Stamm</nuxt-link>,
									<nuxt-link to="/experten/florian-schwarz">Florian Schwarz</nuxt-link>
								</div>
								<div class="workshop">
									<nuxt-link to="/programm/psychische-gesundheit"
										><h3>Psychische Gesundheit</h3></nuxt-link
									>
									<nuxt-link to="/experten/roger-staub">Roger Staub</nuxt-link>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">14:15</h3>
								<nuxt-link to="/programm/abschlussplenum"><h2>Abschlussplenum</h2></nuxt-link>
								<div class="details">
									<p>Referent</p>
									<div>
										<nuxt-link to="/experten/andreas-saegesser">Andreas S&auml;gesser</nuxt-link>
										<nuxt-link to="/experten/roland-zueger">Roland Z&uuml;ger</nuxt-link>
									</div>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="panel">
								<h3 class="time">14:15</h3>
								<h2>Ausblick 2022</h2>
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
		title: 'Programm | Fokus Berufsbildung 2021'
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
