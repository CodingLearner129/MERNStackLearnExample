// get data from .env file
const config = {
    nodeUrl: import.meta.env.VITE_NODE_URL || "http://localhost:3033",
    googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",
    cryptoEncryption: import.meta.env.VITE_CRYPTO_ENCRYPTION || "",
};

export default config;