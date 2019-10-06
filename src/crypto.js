// import CryptoJS from './rc2'
export default class Crypto {

    static encryptRC2(data, password) {
         console.log(CryptoJS);
        const cipherText2 = CryptoJS.RC2.encrypt(data, password);
        return cipherText2
        // return '1'
    }
    static decryptRC2(data, password) {
        let bytes = CryptoJS.RC2.decrypt(data, password);
        let plaintext = bytes.toString(CryptoJS.enc.Utf8);
        return plaintext;
        // return '2'
    }
}