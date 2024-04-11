import type { ConfigType } from '../store/store'

//TODO improve the function to match the exact syntax of the file
export function renderConfig(configObj: ConfigType) {
    let stringifiedObj = ''

    for (const property in configObj) {
        if (typeof configObj[property as keyof ConfigType] === 'object') {
            stringifiedObj += `${property}: {\n${renderConfig(configObj[property as keyof unknown])}}\n`
        } else {
            stringifiedObj += `${property}: ${configObj[property as keyof unknown]},\n`
        }
    }
    return stringifiedObj
}
