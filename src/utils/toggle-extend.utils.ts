import { Extendables, tailwindConfig } from '../store/store'

export function handleToggleExtend(field: Extendables, checked: boolean) {
    tailwindConfig.update((config) => {
        const index = config.extend.findIndex(
            (element) => element.field === field
        )

        if (index < 0) {
            config.extend.push({ field: field, value: checked })
        } else {
            config.extend[index] = { field: field, value: checked }
        }

        return config
    })
}
