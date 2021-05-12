export const state = () => ({
	experts: []
})

export const getters = {
	getExperts: state => () => {
		return state.experts
	},
	getExpertBySlug: state => slug => {
		return state.experts.filter(e => e.slug == slug)[0]
	}
}

export const mutations = {
	SET_EXPERTS(state, exp) {
		state.experts = exp
	},
	ADD_EXPERT(state, exp) {
		state.experts.push(exp)
	}
}

export const actions = {
	setExperts({ commit }, exp) {
		commit('SET_EXPERTS', exp)
	},
	addExpert({ commit }, exp) {
		commit('ADD_EXPERT', exp)
	}
}
