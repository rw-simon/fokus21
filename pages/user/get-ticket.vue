<template>
	<div class="wrapper">
		<div class="container">
			<!-- <h1 style="font-size: 4rem">Lernen – ein breiter Horizont</h1> -->
			<!-- <h2>24. Juni 2021</h2> -->
			<!-- <hr /> -->
			<div class="process">
				<div class="step-1" v-if="step == 1">
					<h2>Rechnungsadresse</h2>
					<br />
					<form>
						<input type="text" v-model="accountDetail.firma" placeholder="Firma (optional)" class="full" />
						<input type="text" required v-model="accountDetail.street" placeholder="Strasse" class="long" />
						<input type="text" required v-model="accountDetail.nr" placeholder="Nr" class="short" />
						<input type="text" required v-model="accountDetail.plz" placeholder="PLZ" class="short" /><input
							type="text"
							required
							v-model="accountDetail.city"
							placeholder="Ort"
							class="long"
						/><input
							type="text"
							required
							v-model="accountDetail.phone"
							placeholder="Telefon"
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
					<nuxt-link to="/user/dashboard" class="button button-gray">Abbrechen</nuxt-link>
					<a
						href="#"
						@click="
							addAddressData()
							step = 2
						"
						class="button button-red"
						>Weiter</a
					>
				</div>
				<div class="step-2" v-if="step == 2">
					<h2>Workshops auswählen</h2>
					<p>Wähle jeweils einen Workshop für den Morgen und den Nachmittag</p>
					<div class="workshops">
						<div class="workshops-morgen">
							<p><strong>Morgens 10.30 - 11.15 Uhr</strong></p>
							<article>
								<input type="radio" name="workshopmorgen" v-model="selectedWorkshop[0]" />
								<div class="content">
									<h4>Entdeckendes Lernen</h4>
									<nuxt-link to="/programm/entdeckendes-lernen">Infos</nuxt-link>
								</div>
							</article>
							<article>
								<input type="radio" name="workshopmorgen" v-model="selectedWorkshop[0]" />
								<div class="content">
									<h4>Wenn Lernende das Zepter übernehmen</h4>
									<nuxt-link to="/programm/wenn-lernende-das-zepter-uebernehmen">Infos</nuxt-link>
								</div>
							</article>
							<article>
								<input type="radio" name="workshopmorgen" v-model="selectedWorkshop[0]" />
								<div class="content">
									<h4>Mit Sol unterwegs</h4>
									<nuxt-link to="/programm/mit-sol-unterwegs">Infos</nuxt-link>
								</div>
							</article>
							<article>
								<input type="radio" name="workshopmorgen" v-model="selectedWorkshop[0]" />
								<div class="content">
									<h4>Schule im Jahr 2020</h4>
									<nuxt-link to="/programm/schule-im-jahr-2020">Infos</nuxt-link>
								</div>
							</article>
						</div>
						<div class="workshops-nachmittag">
							<p><strong>Nachmittag 13.30 - 14.15 Uhr</strong></p>
							<article>
								<input type="radio" name="workshopnachmittag" v-model="selectedWorkshop[1]" />
								<div class="content">
									<h4>Challenge Lernen – ADS</h4>
									<nuxt-link to="/programm/challenge-lernen-ads">Infos</nuxt-link>
								</div>
							</article>
							<article>
								<input type="radio" name="workshopnachmittag" v-model="selectedWorkshop[1]" />
								<div class="content">
									<h4>Mental Fit</h4>
									<nuxt-link to="/programm/mental-fit">Infos</nuxt-link>
								</div>
							</article>
							<article>
								<input type="radio" name="workshopnachmittag" v-model="selectedWorkshop[1]" />
								<div class="content">
									<h4>Von der Berufsweltmeisterin lernen</h4>
									<nuxt-link to="/programm/von-der-berufsweltmeisterin-lernen">Infos</nuxt-link>
								</div>
							</article>
							<article>
								<input type="radio" name="workshopnachmittag" v-model="selectedWorkshop[1]" />
								<div class="content">
									<h4>Selbstorganisiertes Lernen</h4>
									<nuxt-link to="/programm/selbstorganisiertes-lernen">Infos</nuxt-link>
								</div>
							</article>
							<article>
								<input type="radio" name="workshopnachmittag" v-model="selectedWorkshop[1]" />
								<div class="content">
									<h4>Psychische Gesundheit</h4>
									<nuxt-link to="/programm/psychische-gesundheit">Infos</nuxt-link>
								</div>
							</article>
						</div>
					</div>
					<hr />
					<a href="#" @click="step = 1" class="button button-gray">Zurück</a>
					<a href="#" @click="step = 3" class="button button-red">Weiter</a>
				</div>
				<div class="step-3" v-if="step == 3">
					<h2>Anmeldebedingungen</h2>
					<p>
						Bestätige, dass du die Anmelde- und Teilnahmebedingungen gelesen hast und damit einverstanden
						bist.
					</p>
					<div>
						<nuxt-link to="/"><h3>> Teilnahmebedingungen</h3></nuxt-link>
						<input type="checkbox" name="" id="acceptagb" /><label for="acceptagb"
							>Ich habe die Anmeldebedingungen gelesen und bin damit einverstanden</label
						>
					</div>
					<hr />
					<a href="#" @click="step = 2" class="button button-gray">Zurück</a>
					<a href="#" @click="step = 4" class="button button-red">Weiter</a>
				</div>
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
		step: 2,
		accountDetail: {
			street: '',
			nr: '',
			plz: '',
			city: '',
			phone: '',
			email: '',
			firma: ''
		},
		selectedWorkshop: ['', '']
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
					this.accountDetail.street = doc.data().address.street
					this.accountDetail.nr = doc.data().address.nr
					this.accountDetail.plz = doc.data().address.plz
					this.accountDetail.city = doc.data().address.city
					this.accountDetail.phone = doc.data().phone
					this.accountDetail.email = doc.data().email
					this.accountDetail.firma = doc.data().firma.name
				}
			})
			.catch(err => {
				console.log('Error getting document ', err)
			})
		//////////////////////////////////////////
		this.$store.commit('pagetitle/change', 'Jetzt anmelden')
	},
	methods: {
		addAddressData() {
			console.log('added')
		}
	}
}
</script>

<style lang="sass" scoped>
form
	display: grid
	grid-template-columns: repeat(4, 1fr )
	gap: 1rem
	input
		grid-column: span 2
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
	article
		display: grid
		grid-template-columns: 2rem 1fr
		align-items: center
</style>
