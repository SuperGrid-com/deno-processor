import { updateComponentProp } from "./deps.js"

export async function process(body) {
	// return request
	return {
		page: {
			...body.page,
			updateText: (id, value) => {
				updateComponentProp(body.page, id, "props.text", value)
			},
			updateStyles: (id, key, value) => {
				updateComponentProp(body.page, id, "styles." + key, value)
			},
			hideElement: (id) => {
				updateComponentProp(body.page, id, "props.display", "none")
			},
		},
		user: {
			...body.user,
			updateName: (value) => {
				body.user.name = value
			},
		},
		location: {
			...body.location,
		},
		middleware: {
			...body.middleware,
		},
		theme: {
			...body.theme,
			updateColor: (type, key, value) => {
				console.log(body.theme.colors[type])
				console.log(body.theme.colors[type][key].scale)
				body.theme.colors[type][key].scale = [
					value,
					value,
					value,
					value,
					value,
					value,
					value,
					value,
					value,
					value,
				]
			},
		},
		automations: automationsParse(body?.automations ?? []),
	}
}

// automations parsing
function automationsParse(automations) {
	let parsedAutomations = {}

	for (let i = 0; i < automations.length; i++) {
		parsedAutomations[automations[i]] = {
			trigger: () => {
				console.log("Trigger automation!", automations[i])
			},
			delayAndTrigger: (delay) => {
				console.log("Delay and trigger automation!", automations[i], delay)
			},
		}
	}

	return parsedAutomations
}
