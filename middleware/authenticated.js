export default function({ store, route, redirect }) {
	const user = store.state.users.user
	const blockedRoute = /\/dashboard\/*/g // Any route matching '/user' is blocked
	if (!Object.keys(user).length && route.path.match(blockedRoute)) {
		redirect('/user/login')
	}
	if (Object.keys(user).length && (route.path.match('login') || route.path.match('register'))) {
		redirect('/user/dashboard')
	}
}
