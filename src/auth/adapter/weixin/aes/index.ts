//@ts-nocheck
import CryptoJS  from 'crypto-js'

//解密
export function decrypted(param:any,key:string,iv:string) {
    key = CryptoJS.enc.Base64.parse(key);
    iv = CryptoJS.enc.Base64.parse(iv);
  let decrypted = CryptoJS.AES.decrypt(param, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
  try {
      return JSON.parse(decrypted as string)
  } catch (error) {
      console.error(error)
      return decrypted
  }
}
