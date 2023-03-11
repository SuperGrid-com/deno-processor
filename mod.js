import { updateComponentProp, serve } from "./deps.js"

export async function run(fn) {
	serve((req) => {

    const request = await req.json();
    const r = await process(request)

		// Run the middleware
		fn(r)

		// Return a response
    return  Response.json(r)
		// return new Response("This is a run middleware wrapper?")
	})
}

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
