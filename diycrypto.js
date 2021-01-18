
export function caesarEncrypt(msg, shift) {

    // 1. översätta varje tecken till ett nummer
    const charCodes = []
    for (let i = 0; i < msg.length; i++) {
        charCodes.push(msg[i].charCodeAt(0))

    }

    // 2. shifta det numret
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] + shift
    }

    let result = ""
    // 3. översätta  numret till tecken, charCode till string
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])
    }
    return result
}


export function caesarDecrypt(encryptedMsg, shift){
    const charCodes = []
    for (let i = 0; i < encryptedMsg.length; i++) {
        charCodes.push(encryptedMsg[i].charCodeAt(0))
    }

    // 2. shifta det numret
    for (let i = 0; i < charCodes.length; i++) {
        charCodes[i] = charCodes[i] - shift //-
    }

    let result = ""
    // 3. översätta  numret till tecken, charCode till string
    for (let i = 0; i < charCodes.length; i++) {
        result = result + String.fromCharCode(charCodes[i])
    }
    return result
}
