export const state = () => ({
	title: 'Programm'
})

export const mutations = {
	change(state, title) {
		state.title = title
	}
}
