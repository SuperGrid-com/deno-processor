export { set } from "https://esm.sh/object-path@0.11.8"
export { find } from "https://esm.sh/simple-object-query@1.6.1"

export function updateComponentProp(definition, id, prop, value) {
	const getComponent = find(definition, {
		id: id,
	})[0]

	return set(getComponent, prop, value)
}
