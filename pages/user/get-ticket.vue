<template>
	<div class="wrapper">
		<div class="container">
			<!-- <h1 style="font-size: 4rem">Lernen – ein breiter Horizont</h1> -->
			<!-- <h2>24. Juni 2021</h2> -->
			<!-- <hr /> -->
			<div class="steps">
				<span :class="{ active: step == 1, success: step > 1 }">1</span>
				<span :class="{ active: step == 2, success: step > 2 }">2</span>
				<span :class="{ active: step == 3, success: step > 3 }">3</span>
				<span :class="{ active: step == 4, success: step > 4 }">4</span>
			</div>
			<div class="process">
				<transition-group name="steps">
					<div key="1" class="step-1" v-if="step == 1">
						<h2>Rechnungsadresse</h2>
						<p>Bitte Rechnungsadresse einfülllen</p>
						<br />
						<form>
							<input
								type="text"
								v-model="accountDetail.firma.name"
								placeholder="Firma (optional)"
								class="full"
							/>
							<input type="text" required v-model="accountDetail.vorname" placeholder="Vorname*" />
							<input type="text" required v-model="accountDetail.nachname" placeholder="Nachname*" />
							<input
								type="text"
								required
								v-model="accountDetail.street"
								placeholder="Strasse*"
								class="long"
							/>
							<input type="text" required v-model="accountDetail.nr" placeholder="Nr*" class="short" />
							<input
								type="text"
								required
								v-model="accountDetail.plz"
								placeholder="PLZ*"
								class="short"
							/><input
								type="text"
								required
								v-model="accountDetail.city"
								placeholder="Ort*"
								class="long"
							/><input
								type="tel"
								required
								v-model="accountDetail.phone"
								placeholder="Telefon*"
								class="medium"
							/><input
								type="text"
								required
								v-model="accountDetail.email"
								placeholder="Geburtstag"
								class="medium"
							/>
						</form>
						<hr />
					</div>
					<div key="2" class="step-2" v-if="step == 2">
						<h2>Workshops auswählen</h2>
						<p>Wähle jeweils einen Workshop für den Morgen und den Nachmittag</p>
						<div class="workshops">
							<div class="workshops-morgen">
								<p><strong>Morgens 10.30 - 11.15 Uhr</strong></p>
								<article>
									<input
										type="radio"
										name="workshopmorgen"
										value="Entdeckendes Lernen"
										v-model="selectedWorkshop[0]"
									/>
									<div class="content">
										<h4>Entdeckendes Lernen</h4>
										<nuxt-link to="/programm/entdeckendes-lernen">Infos</nuxt-link>
									</div>
								</article>
								<article>
									<input
										type="radio"
										name="workshopmorgen"
										value="Wenn Lernende das Zepter übernehmen"
										v-model="selectedWorkshop[0]"
									/>
									<div class="content">
										<h4>Wenn Lernende das Zepter übernehmen</h4>
										<nuxt-link to="/programm/wenn-lernende-das-zepter-uebernehmen">Infos</nuxt-link>
									</div>
								</article>
								<article>
									<input
										type="radio"
										name="workshopmorgen"
										value="Mit Sol unterwegs"
										v-model="selectedWorkshop[0]"
									/>
									<div class="content">
										<h4>Mit Sol unterwegs</h4>
										<nuxt-link to="/programm/mit-sol-unterwegs">Infos</nuxt-link>
									</div>
								</article>
								<article>
									<input
										type="radio"
										name="workshopmorgen"
										value="Schule im Jahr 2021"
										v-model="selectedWorkshop[0]"
									/>
									<div class="content">
										<h4>Schule im Jahr 2021</h4>
										<nuxt-link to="/programm/schule-im-jahr-2020">Infos</nuxt-link>
									</div>
								</article>
							</div>
							<div class="workshops-nachmittag">
								<p><strong>Nachmittag 13.30 - 14.15 Uhr</strong></p>
								<article>
									<input
										type="radio"
										name="workshopnachmittag"
										value="Challenge Lernen – ADS"
										v-model="selectedWorkshop[1]"
									/>
									<div class="content">
										<h4>Challenge Lernen – ADS</h4>
										<nuxt-link to="/programm/challenge-lernen-ads">Infos</nuxt-link>
									</div>
								</article>
								<article>
									<input
										type="radio"
										name="workshopnachmittag"
										value="Mental Fit"
										v-model="selectedWorkshop[1]"
									/>
									<div class="content">
										<h4>Mental Fit</h4>
										<nuxt-link to="/programm/mental-fit">Infos</nuxt-link>
									</div>
								</article>
								<article>
									<input
										type="radio"
										name="workshopnachmittag"
										value="Von der Berufsweltmeisterin lernen"
										v-model="selectedWorkshop[1]"
									/>
									<div class="content">
										<h4>Von der Berufsweltmeisterin lernen</h4>
										<nuxt-link to="/programm/von-der-berufsweltmeisterin-lernen">Infos</nuxt-link>
									</div>
								</article>
								<article>
									<input
										type="radio"
										name="workshopnachmittag"
										value="Selbstorganisiertes Lernen"
										v-model="selectedWorkshop[1]"
									/>
									<div class="content">
										<h4>Selbstorganisiertes Lernen</h4>
										<nuxt-link to="/programm/selbstorganisiertes-lernen">Infos</nuxt-link>
									</div>
								</article>
								<article>
									<input
										type="radio"
										name="workshopnachmittag"
										value="Psychische Gesundheit"
										v-model="selectedWorkshop[1]"
									/>
									<div class="content">
										<h4>Psychische Gesundheit</h4>
										<nuxt-link to="/programm/psychische-gesundheit">Infos</nuxt-link>
									</div>
								</article>
							</div>
						</div>
						<hr />
					</div>
					<div key="3" class="step-3" v-if="step == 3">
						<h2>Anmeldebedingungen</h2>
						<p>
							Bestätige, dass du die Anmelde- und Teilnahmebedingungen gelesen hast und damit
							einverstanden bist.
						</p>
						<div>
							<nuxt-link to="/informationen/teilnahme"><h3>Teilnahmebedingungen</h3></nuxt-link>
							<input type="checkbox" v-model="acceptedAgb" name="acceptagb" id="acceptagb" /><label
								for="acceptagb"
								>Ich habe die Anmeldebedingungen gelesen und bin damit einverstanden</label
							>
						</div>
						<hr />
					</div>
					<div key="4" class="step-4" v-if="step == 4">
						<h2>Anmeldung abschliessen</h2>
						<p>Danke für deine Anmeldung, {{ accountDetail.vorname }} {{ accountDetail.nachname }}.</p>
						<div class="overview">
							<div>
								<p><strong>Rechnungsadresse </strong><a href="#" @click="step = 1">(ändern)</a></p>
								<p>
									<span v-if="accountDetail.firma">{{ accountDetail.firma.name }}<br /></span
									><span>{{ accountDetail.street }} </span><span>{{ accountDetail.nr }}</span
									><br /><span>{{ accountDetail.plz }} </span><span>{{ accountDetail.city }}</span
									><br /><span>{{ accountDetail.phone }}</span
									><br /><span>{{ accountDetail.email }}</span>
								</p>
							</div>
							<div>
								<p><strong>Workshops </strong><a href="#" @click="step = 2">(ändern)</a></p>
								<p>
									<span>Morgen:</span><br /><span>{{ selectedWorkshop[0] }}</span>
								</p>
								<p>
									<span>Nachmittag:</span><br /><span>{{ selectedWorkshop[1] }}</span>
								</p>
							</div>
						</div>
						<hr />
						<div>
							<h3>Fokus Berufsbildung 2021: Lernen – ein breiter Horizont</h3>
							<p>Datum: 24. Juni 2020 <br />Ort: Online – live aus der Parkarena Winterthur</p>
							<p>Kosten: CHF 250.–</p>
						</div>
						<hr />
					</div>
				</transition-group>
				<p class="errormsg" v-if="errorMsg">{{ errorMsg }}</p>
			</div>
			<div class="step-controls">
				<nuxt-link to="/user/dashboard" v-if="step == 1" class="button button-gray">Abbrechen</nuxt-link>
				<a
					href="#"
					@click="
						errorMsg = ''
						step--
					"
					v-else
					class="button button-gray"
					>Zurück</a
				>
				<a href="#" @click="completeOrder()" v-if="step == 4" class="button button-red">Abschliessen</a>
				<a href="#" v-else @click="next()" class="button button-red">Weiter</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head: {
		title: 'Jetzt anmelden | Fokus Berufsbildung 2021'
	},
	data: () => ({
		step: 1,
		accountDetail: {
			nachname: '',
			vorname: '',
			address: {
				street: '',
				nr: '',
				plz: '',
				city: ''
			},
			phone: '',
			email: '',
			firma: { name: '' }
		},
		errorMsg: '',
		selectedWorkshop: ['', ''],
		acceptedAgb: false
	}),
	mounted() {
		let userDocument = this.$fire.firestore.collection('users').doc(this.$store.state.users.user.uid)
		userDocument
			.get()
			.then(doc => {
				if (doc.exists) {
					let mergedUserDocument = { ...this.accountDetail, ...doc.data() }
					this.$fire.firestore
						.collection('users')
						.doc(this.$store.state.users.user.uid)
						.update(mergedUserDocument)
						.then(() => {
							this.accountDetail = mergedUserDocument
						})
				}
			})
			.catch(err => {
				console.log('Error getting document ', err)
			})
		//////////////////////////////////////////
		this.$store.commit('pagetitle/change', 'Jetzt anmelden')
	},
	methods: {
		sendMailToFokus() {
			this.$fire.firestore
				.collection('mail')
				.doc('confirmation_' + this.$store.state.users.user.email + Date.now().toString())
				.set({
					to: 'simon.fischer@rechtwinklig.ch', //this.$store.state.users.user.email.toString(),
					bcc: ['admin@rechtwinklig.ch'],
					message: {
						subject: 'Neue Anmeldung für den 24. Juni',
						html: `<h1>${this.accountDetail.vorname} ${this.accountDetail.nachname} hat sich am Event "Fokus Berufsbildung: Lernen – ein breiter Horizont" angemeldet.</h1><br />
						<hr />
						<p><span style="font-weight: bold;">Name: </span>${this.accountDetail.vorname} ${this.accountDetail.nachname}</p>
						<p><span style="font-weight: bold;">Firma: </span>${this.accountDetail.firma.name}</p>
						<p><span style="font-weight: bold;">Adresse: </span>${this.accountDetail.address.street} ${this.accountDetail.address.nr}, ${this.accountDetail.address.plz} ${this.accountDetail.address.city}</p>
						<p><span style="font-weight: bold;">Telefon: </span>${this.accountDetail.phone}</p>
						<p><span style="font-weight: bold;">Email: </span>${this.accountDetail.email}</p>
						<hr />
						<h2>Workshops</h2>
						<p><span style="font-weight: bold;">Morgen: </span>${this.selectedWorkshop[0]}</p>
						<p><span style="font-weight: bold;">Nachmittag: </span>${this.selectedWorkshop[1]}</p>
						`
					}
				})
		},
		sendMail() {
			this.sendMailToFokus()
			this.$fire.firestore
				.collection('mail')
				.doc(this.$store.state.users.user.email + '_billing_' + Date.now().toString())
				.set({
					to: this.$store.state.users.user.email.toString(), //this.$store.state.users.user.email.toString(),
					bcc: ['admin@rechtwinklig.ch'],
					message: {
						subject: 'Besten Dank für die Teilnahme!',
						text:
							'Grüezi ' +
							this.accountDetail.vorname +
							' ' +
							this.accountDetail.nachname +
							' –– ' +
							'Vielen Dank für Ihre Teilnahme am Event "Fokus Berufsbildung 2021: Lernen – ein breiter Horizont". Gerne bestätigen wir hiermit den Kauf Ihres Tickets. Die Rechnung werden wir Ihnen in einem separaten Mail zustellen. –– Mehr Details zum Event finden Sie in auf unserer Webseite fokus-berufsbildung.ch. –– Wir freuen uns auf Sie! Ihr Fokus-Berufsbildung Team!',
						html:
							'<p>Grüezi ' +
							this.accountDetail.vorname +
							' ' +
							this.accountDetail.nachname +
							'</p><br /><p>Vielen Dank für Ihre Teilnahme am Event <strong>"Fokus Berufsbildung 2021: Lernen – ein breiter Horizont"</strong>.<p></p>Gerne bestätigen wir hiermit den Kauf Ihres Tickets. Die Rechnung werden wir Ihnen in einem separaten Mail zustellen.</p><hr /><p>Mehr Details zum Event finden Sie in auf unserer Webseite <a href="https://www.fokus-berufsbildung.ch" target="_blank">www.fokus-berufsbildung.ch</a>.</p><br /><p><strong>Wir freuen uns auf Sie!</strong></p><img style="width: 220px" src="https://admin.fokus21.rwdev.ch/wp-content/uploads/2021/06/logo_color.png" /><p>Ihr Fokus-Berufsbildung Team!</p>'
					}
				})
				.catch(err => {
					console.log('Error getting document ', err)
				})
		},
		addAddressData() {
			let userRef = this.$fire.firestore.collection('users').doc(this.$store.state.users.user.uid)
			userRef.get().then(doc => {
				if (!doc.exists) {
				} else {
					this.$fire.firestore
						.collection('users')
						.doc(this.$store.state.users.user.uid)
						.update({
							address: {
								street: this.accountDetail.street,
								nr: this.accountDetail.nr,
								plz: this.accountDetail.plz,
								city: this.accountDetail.city
							},
							phone: this.accountDetail.phone,
							firma: { name: this.accountDetail.firma }
						})
				}
			})
		},
		checkAddressData() {
			if (!this.accountDetail.street) {
				this.errorMsg = 'Bitte gib deine Strasse ein'
			} else if (!this.accountDetail.nr) {
				this.errorMsg = 'Bitte gib deine Hausnummer ein'
			} else if (!this.accountDetail.plz) {
				this.errorMsg = 'Bitte gib deine Postleitzahl ein'
			} else if (!this.accountDetail.city) {
				this.errorMsg = 'Bitte gib deinen Wohnort ein'
			} else if (!this.accountDetail.phone) {
				this.errorMsg = 'Bitte gib deine Telefonnummer ein'
			} else {
				this.errorMsg = ''
				return true
			}
		},
		addWorkshopData() {
			let userRef = this.$fire.firestore.collection('users').doc(this.$store.state.users.user.uid)
			userRef.get().then(doc => {
				if (!doc.exists) {
				} else {
					this.$fire.firestore
						.collection('users')
						.doc(this.$store.state.users.user.uid)
						.update({
							workshops: {
								morning: this.selectedWorkshop[0],
								afternoon: this.selectedWorkshop[1]
							}
						})
				}
			})
		},
		next() {
			switch (this.step) {
				case 1:
					if (this.checkAddressData()) {
						this.addAddressData()
						this.step++
					}
					break
				case 2:
					if (this.selectedWorkshop[0] && this.selectedWorkshop[1]) {
						this.addWorkshopData()
						this.errorMsg = ''
						this.step++
					} else {
						this.errorMsg = 'Bitte wähle einen Workshop für den Morgen und den Nachmittag aus'
					}
					break
				case 3:
					if (this.acceptedAgb) {
						this.errorMsg = ''
						this.step++
					} else {
						this.errorMsg = 'Bitte lese und akzeptiere die Teilnahme- und Anmeldebedingungen'
					}
					break
			}
		},
		completeOrder() {
			let userRef = this.$fire.firestore.collection('users').doc(this.$store.state.users.user.uid)
			userRef.get().then(doc => {
				if (!doc.exists) {
				} else {
					this.$fire.firestore
						.collection('users')
						.doc(this.$store.state.users.user.uid)
						.update({
							ticket: {
								bought: true
							}
						})
				}
			})
			this.sendMail()
			this.$router.push('/user/dashboard')
		}
	}
}
</script>

<style lang="sass" scoped>
.overview
	display: grid
	grid-template-columns: 1fr 1fr
	gap: 4rem
	@include mobile
		grid-template-columns: 1fr
		gap: 0
.step-controls
	position: absolute
	bottom: 0
	@include mobile
		background: white
		width: 100%
		padding-bottom: 1rem
		padding-top: 1rem
		z-index: 999999999999999
.container
	height: 100%
	position: relative
	overflow: hidden
	.process
		overflow: auto
		height: 100%
		padding-bottom: 6rem
p.errormsg
	color: $c-red
.steps
	display: grid
	grid-template-columns: repeat(4, 1fr)
	margin-bottom: 3rem
	span
		justify-self: center
		height: 2rem
		width: 2rem
		background: white
		border: 2px solid $c-gray-light
		border-radius: 50%
		display: grid
		align-items: center
		justify-items: center
		font-weight: bold
		transition: background 200ms ease-out, border 200ms ease-out
		color: $c-gray-dark
		&.active
			border-color: $c-red
			color: $c-black
		&.success
			color: white
			background: $c-gray-light
form
	display: grid
	grid-template-columns: repeat(4, 1fr )
	gap: 1rem
	input
		grid-column: span 2
		@include mobile
			grid-column: 1/-1
		&.full
			grid-column: 1/-1
		&.long
			grid-column: span 3
		&.short
			grid-column: span 1
.workshops
	display: grid
	grid-template-columns: 1fr 1fr
	gap: 4rem
	@include mobile
		grid-template-columns: 1fr
		gap: 2rem
	article
		display: grid
		grid-template-columns: 3rem 1fr
		align-items: center
</style>
