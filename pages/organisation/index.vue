<template>
	<div class="wrapper">
		<div class="container">
			<section class="partner">
				<h2>Partner</h2>
				<div class="logos">
					<a href="https://www.kv-informatik.ch" target="_blank"
						><img src="/logos/logo_kfmvwinterthur.png" alt="Logo KFMV Winterthur"
					/></a>
					<a href="https://www.berufsbildner.ch" target="_blank"
						><img src="/logos/logo_berufsbildnerch.png" alt="Logo berufsbildner.ch"
					/></a>
					<a href="https://www.yousty.ch" target="_blank"
						><img src="/logos/Yousty-Logo-ohne-text.png" alt="Logo Yousty"
					/></a>
				</div>
			</section>
			<section class="hauptsponsoren">
				<h2>Hauptsponsoren</h2>
				<div class="logos">
					<a href="https://stadt.winterthur.ch" target="_blank"
						><img src="/logos/logo_stadtwinterthur.png" alt="Logo Stadt Winterthur"
					/></a>
					<a href="https://www.houseofwinterthur.ch" target="_blank"
						><img src="/logos/logo_houseofwinterthur.png" alt="Logo House of Winterthur"
					/></a>
					<a href="https://www.wskvw.ch" target="_blank"
						><img src="/logos/logo_wskvw.png" alt="Logo Wirtschaftsschule KV Winterthur"
					/></a>
				</div>
			</section>
			<section class="cosponsoren">
				<h2>Co-Sponsoren</h2>
				<div class="logos">
					<a href="https://www.professional.ch" target="_blank"
						><img src="/logos/logo_professionalch.png" alt="Logo professional.ch"
					/></a>
					<a href="https://www.sib.ch" target="_blank"><img src="/logos/logo_sib.png" alt="Logo SIB" /></a>
				</div>
			</section>
			<section class="supporter">
				<h2>Supporter</h2>
				<div class="logos">
					<a href="https://www.dls-lehrmittel.ch" target="_blank"
						><img src="/logos/logo_dls.png" alt="Logo DLS Lehrmittel"
					/></a>
					<a href="https://www.focuswater.ch" target="_blank"
						><img src="/logos/logo_focuswater.png" alt="Logo Focus Water"
					/></a>
					<a href="https://www.zkb.ch" target="_blank"
						><img src="/logos/logo_zkb.png" alt="Logo Zürcher Kantonalbank"
					/></a>
					<a href="https://www.zuercherlandbank.ch/" target="_blank"
						><img src="/logos/logo_zlb.png" alt="Logo Zürcher Landbank"
					/></a>
					<a
						href="https://www.tcs.ch/de/der-tcs/sektionen/zuerich/content/standorte/kontaktstelle-winterthur.php"
						target="_blank"
						><img src="/logos/logo_tcszuerich.png" alt="Logo TCS Zürich"
					/></a>
				</div>
			</section>
			<section class="admin">
				<h2>Web &amp; Admin</h2>
				<div class="logos">
					<a href="https://www.rechtwinklig.ch" target="_blank"
						><img src="/logos/logo_rechtwinklig.png" alt="Logo Rechtwinklig"
					/></a>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: 'organisation',
	head: {
		title: 'Organisation | Fokus Berufsbildung 2021',
	},
	mounted() {
		this.$store.commit('pagetitle/change', 'Organisation')
	},
}
</script>

<style lang="sass" scoped>
section
	padding: 2rem 0
	border-bottom: 1px solid $c-gray-light
	.logos
		display: grid
		grid-template-columns: repeat(3, 1fr)
		gap: 2rem 6rem
		@include mobile
			gap: 2rem
			grid-template-columns: 1fr 1fr
		a
			display: block
			img
				width: 100%
</style>
