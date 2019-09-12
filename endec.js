const contents = () => document.getElementById("contents").value;
const key = () => document.getElementById("key").value;
const result = document.getElementById("result");
window.enc = () => (result.innerText = CryptoJS.AES.encrypt(contents(), key()).toString());
window.dec = () => (result.innerText = CryptoJS.AES.decrypt(contents(), key()).toString(CryptoJS.enc.Utf8));
