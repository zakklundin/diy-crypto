import {caesarEncrypt, caesarDecrypt} from "./diycrypto.js"

const secretMessage = "ATTACKATSEVEN"
const encryptedMessage = caesarEncrypt(secretMessage, 2)
const decryptedMessage = caesarDecrypt(encryptedMessage, 2)

console.log(secretMessage, encryptedMessage, decryptedMessage)