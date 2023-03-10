// import { bold } from "./deps.ts";

/** Returns `Hello World` in bold */
export function getHelloWorld() {
	return "This is from a module! Deno land!!"
}

export async function process(req) {
	const body = await req.json()

	return {
		page: {
			...body.page,
			updateText: (id, value) => {
				console.log(id, value)
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
