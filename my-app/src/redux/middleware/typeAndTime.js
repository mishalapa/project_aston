const typeAndTime = () => (next) => (action) => {
	console.log(new Date().toLocaleTimeString(), action.type)
	next(action)
}

export default typeAndTime
