export const state = () => ({
	experts: [],
	infos: []
})

export const getters = {
	getExperts: state => () => {
		return state.experts
	},
	getExpertBySlug: state => slug => {
		return state.experts.filter(e => e.slug == slug)[0]
	},
	getInfos: state => () => {
		return state.infos
	},
	getInfoBySlug: state => slug => {
		return state.infos.filter(e => e.slug == slug)[0]
	}
}

export const mutations = {
	SET_EXPERTS(state, exp) {
		state.experts = exp
	},
	ADD_EXPERT(state, exp) {
		state.experts.push(exp)
	},
	SET_INFOS(state, inf) {
		state.infos = inf
	},
	ADD_INFO(state, inf) {
		state.infos.push(inf)
	}
}

export const actions = {
	setExperts({ commit }, exp) {
		commit('SET_EXPERTS', exp)
	},
	addExpert({ commit }, exp) {
		commit('ADD_EXPERT', exp)
	},
	setInfos({ commit }, inf) {
		commit('SET_INFOS', inf)
	},
	addInfo({ commit }, inf) {
		commit('ADD_INFO', inf)
	}
}
