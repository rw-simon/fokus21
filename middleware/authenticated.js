export default function({ store, route, redirect }) {
	const user = store.state.users.user
	const blockedRoute = /\/user\/*/g // Any route matching '/user' is blocked
	if (!user && route.path.match(blockedRoute)) {
		redirect('/user/login')
	}
	if (user && (route.path.match('login') || route.path.match('register'))) {
		redirect('/user/dashboard')
	}
}
