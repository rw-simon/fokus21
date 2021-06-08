import JWTDecode from 'jwt-decode'
import cookieparser from 'cookieparser'

export const state = () => ({
	experts: [],
	infos: [],
	events: []
})

export const getters = {
	getExperts: state => () => {
		return state.experts
	},
	getExpertBySlug: state => slug => {
		return state.experts.filter(e => e.slug == slug)[0]
	},
	getExpertById: state => slug => {
		return state.experts.filter(e => e.id == id)[0]
	},
	getEvents: state => () => {
		return state.events
	},
	getEventBySlug: state => slug => {
		return state.events.filter(e => e.slug == slug)[0]
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
	SET_EVENTS(state, evn) {
		state.events = evn
	},
	ADD_EVENT(state, evn) {
		state.events.push(evn)
	},
	SET_INFOS(state, inf) {
		state.infos = inf
	},
	ADD_INFO(state, inf) {
		state.infos.push(inf)
	}
}

export const actions = {
	async nuxtServerInit({ commit }, { req }) {
		if (process.server && process.static) return
		if (!req.headers.cookie) return
		const parsed = cookieparser.parse(req.headers.cookie)
		const accessTokenCookie = parsed.access_token
		if (!accessTokenCookie) return
		const decoded = JWTDecode(accessTokenCookie)
		if (decoded) {
			commit('users/SET_USER', {
				uid: decoded.user_id,
				email: decoded.email
			})
		}
	},
	setExperts({ commit }, exp) {
		commit('SET_EXPERTS', exp)
	},
	addExpert({ commit }, exp) {
		commit('ADD_EXPERT', exp)
	},
	setEvents({ commit }, evn) {
		commit('SET_EVENTS', evn)
	},
	addEvent({ commit }, evn) {
		commit('ADD_EVENT', evn)
	},
	setInfos({ commit }, inf) {
		commit('SET_INFOS', inf)
	},
	addInfo({ commit }, inf) {
		commit('ADD_INFO', inf)
	}
}
