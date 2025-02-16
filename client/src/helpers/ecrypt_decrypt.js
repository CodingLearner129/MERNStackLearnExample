import CryptoJS from 'crypto-js';
import config from '../config/config';

// Encryption function
export const encryptData = (data) => {
    return CryptoJS.AES.encrypt(JSON.stringify(data), config.cryptoEncryption).toString();
};

// Decryption function
export const decryptData = (encryptedData) => {
    const bytes = CryptoJS.AES.decrypt(encryptedData, config.cryptoEncryption);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

// const encryptedToken = encryptData(token, encryptionKey);

// // Store encrypted token in localStorage
// localStorage.setItem('token', encryptedToken);

// // Retrieve and decrypt the token when needed
// const storedToken = localStorage.getItem('token');
// if (storedToken) {
//     const decryptedToken = decryptData(storedToken, encryptionKey);
//     console.log('Decrypted token:', decryptedToken);
// }
