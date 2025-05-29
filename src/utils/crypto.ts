import CryptoJS from "crypto-js";
const SECRET_KEY = "secret-key-123";

export const encrypt = (text: string) => {
  return CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
};

export const decrypt = (ciphertext: string) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedText);
};
