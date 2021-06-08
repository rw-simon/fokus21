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
							<div v-if="user.address.street">
								<h4>Kontakt</h4>
								<p>
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
					<div class="panel">
						<div class="next-event">
							<h3>Nächster Event</h3>
							<h2>Lernen – ein breiter Horizont</h2>
							<h3>CHF 250.–</h3>
							<br />
							<nuxt-link v-if="!user.ticket.bought" class="button button-red" to="/user/get-ticket"
								>Jetzt anmelden</nuxt-link
							>
							<a v-else>Bereits angemeldet</a>
							<nuxt-link to="/programm" class="button button-blue">Programm</nuxt-link>
							<hr />
							<div class="event-details">
								<p>Datum</p>
								<p>24. Juni 2021</p>
								<p>Ort</p>
								<p><span style="font-style: italic;">Online</span> – Live aus der Parkarena</p>
							</div>
							<hr />
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
	data: () => ({
		user: {
			vorname: '',
			nachname: '',
			address: {},
			phone: '',
			email: '',
			firma: {},
			ticket: {}
		}
	}),
	mounted() {
		let userRef = this.$fire.firestore.collection('users').doc(this.$store.state.users.user.uid)
		userRef
			.get()
			.then(doc => {
				if (!doc.exists) {
				} else {
					if (!doc.data().address) {
						this.$fire.firestore
							.collection('users')
							.doc(this.$store.state.users.user.uid)
							.update({
								address: {
									street: '',
									nr: '',
									plz: '',
									city: ''
								}
							})
					}
					if (!doc.data().phone) {
						this.$fire.firestore
							.collection('users')
							.doc(this.$store.state.users.user.uid)
							.update({
								phone: ''
							})
					}
					if (!doc.data().email) {
						this.$fire.firestore
							.collection('users')
							.doc(this.$store.state.users.user.uid)
							.update({
								email: ''
							})
					}
					if (!doc.data().firma) {
						this.$fire.firestore
							.collection('users')
							.doc(this.$store.state.users.user.uid)
							.update({
								firma: { name: '' }
							})
					}
					if (!doc.data().ticket) {
						this.$fire.firestore
							.collection('users')
							.doc(this.$store.state.users.user.uid)
							.update({
								ticket: {
									paid: false,
									bought: false,
									discount: false,
									ticketValue: 250
								}
							})
					}
					this.user.vorname = doc.data().vorname
					this.user.nachname = doc.data().nachname
					this.user.address = doc.data().address
					this.user.phone = doc.data().phone
					this.user.email = doc.data().email
					this.user.firma = doc.data().firma
					this.user.ticket = doc.data().ticket
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
			await Cookie.remove('access_token')
			location.href = '/'
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
