import objectPath from "https://esm.sh/object-path@0.11.8"
import objectQuery from "https://esm.sh/simple-object-query@1.6.1"

export function updateComponentProp(definition, id, prop, value) {
	const getComponent = objectQuery.find(definition, {
		id: id,
	})[0]

	return objectPath.set(getComponent, prop, value)
}
