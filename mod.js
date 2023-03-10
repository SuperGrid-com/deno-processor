import { updateComponentProp } from "./deps.js"

export async function process(body) {
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
	}
}
