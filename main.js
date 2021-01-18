const secretMessage = "ATTACKATSEVEN"
console.log(secretMessage)

// 1. översätta varje tecken till ett nummer
const charCodes = []
for (let i = 0; i < secretMessage.length; i++) {
    charCodes.push(secretMessage[i].charCodeAt(0))    
    
}

// 2. shifta det numret
for (let i = 0; i < charCodes.length; i++) {
    charCodes[i] = charCodes[i] + 1
}

let encryptedMessage = ""
// 3. översätta  numret till tecken, charCode till string
for (let i = 0; i < charCodes.length; i++) {
    encryptedMessage = encryptedMessage + String.fromCharCode(charCodes[i])
}
console.log(encryptedMessage)