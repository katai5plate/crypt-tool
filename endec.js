window.enc = (contents, key) => CryptoJS.AES.encrypt(contents, key).toString();
window.dec = (contents, key) => CryptoJS.AES.decrypt(contents, key).toString(CryptoJS.enc.Utf8);
