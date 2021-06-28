<template>
	<div class="wrapper">
		<div class="container" v-if="user.vorname">
			<section class="settings">
				<!-- <nuxt-link to="/user/einstellungen">Einstellungen</nuxt-link> -->
				<a @click="logout" href="#">Abmelden</a>
			</section>
			<div class="grid">
				<div>
					<div class="panel">
						<div class="profile">
							<h3>Willkommen zurück</h3>
							<div class="avatar">
								<img src="/icons/profile/avatar_placeholder_male.jpg" alt="" />
								<h2>{{ user.vorname }} {{ user.nachname }}</h2>
							</div>
							<hr />
							<div>
								<h4>Kontakt</h4>
								<p v-if="user.address.street">
									{{ user.address.street }} {{ user.address.nr }}<br />{{ user.address.plz }}
									{{ user.address.city }}
								</p>
								<p>
									{{ user.phone }} <br />
									{{ user.email }}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div class="panel" v-if="user">
						<div class="next-event">
							<h3>24. Juni 2021</h3>
							<h2>Lernen – ein breiter Horizont</h2>
							<!-- <h3>CHF 250.–</h3> -->
							<br />
							<!-- <nuxt-link v-if="!user.ticket.bought" class="button button-red" to="/user/get-ticket"
								>Jetzt anmelden</nuxt-link
							> -->
							<!-- <p v-else>Du bist bereits angemeldet!</p> -->
							<!-- <nuxt-link v-else class="button button-blue" to="/user/get-ticket"
								>Anmeldung ändern</nuxt-link
							> -->
							<nuxt-link to="/programm" class="button button-blue">Programm</nuxt-link>
							<hr />
							<div class="event-details">
								<p>Datum</p>
								<p>24. Juni 2021</p>
								<p>Ort</p>
								<p><span style="font-style: italic;">Online</span> – Live aus der Parkarena</p>
							</div>
							<div class="selectedworkshops" v-if="user.workshops.morning && user.ticket.bought">
								<hr />
								<h4>Deine Workshops</h4>
								<div>
									<p>
										<span style="font-size:.75rem;font-weight:bold;display:inline-block;width:100px"
											>Morgen: </span
										><span>{{ user.workshops.morning }}</span>
									</p>
									<p>
										<span style="font-size:.75rem;font-weight:bold;display:inline-block;width:100px"
											>Nachmittag: </span
										><span>{{ user.workshops.afternoon }}</span>
									</p>
								</div>
							</div>
							<!-- <div class="downloads">
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
							</div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Cookie from 'js-cookie'

export default {
	name: 'user-dashboard',
	head: {
		title: 'Dashboard | Fokus Berufsbildung 2021'
	},
	data() {
		return {
			user: {
				vorname: '',
				nachname: '',
				address: { street: '', nr: '', plz: '', city: '' },
				phone: '',
				email: '',
				firma: { name: '' },
				ticket: { bought: false },
				workshops: { morning: '', afternoon: '' }
			}
		}
	},
	mounted() {
		// alter to fetch()
		let userDocument = this.$fire.firestore.collection('users').doc(this.$store.state.users.user.uid)
		userDocument
			.get()
			.then(doc => {
				if (doc.exists) {
					let mergedUserDocument = { ...this.user, ...doc.data() }
					this.$fire.firestore
						.collection('users')
						.doc(this.$store.state.users.user.uid)
						.update(mergedUserDocument)
						.then(() => {
							this.user = mergedUserDocument
						})
				}
			})
			.catch(err => {
				console.log('Error getting document ', err)
			})
		///////////////////////////////////////////////////
		this.$store.commit('pagetitle/change', 'Dashboard')
	},
	methods: {
		async logout() {
			await this.$fire.auth.signOut()
			Cookie.remove('access_token')
			location.href = '/user/login'
		}
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
	grid-template-columns: 3rem 1fr
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
