import config from './../config/config.js';
import { logMessage } from './logger.js';
const translationCache = {};

const loadTranslationFile = async (fileName, locale) => {
    const filePath = `./../lang/${locale}/${fileName}.js`;
    try {
        const file = await import(filePath);

        translationCache[`${fileName}-${locale}`] = file.default;
        return file.default;
    } catch (error) {
        console.error(`Error loading translation file ${filePath}:`, error);
        return null;
    }
};

const getTranslation = async (keys, file) => {
    const key = keys.shift();
    if (!file || !file[key]) {
        console.error(`Translation key ${keys.join('.')} not found`);
        return '';
    }
    if (keys.length === 0) {
        return file[key];
    }
    return getTranslation(keys, file[key]);
};

const getMessage = async (key = null, locale = config.locale) => {
    if (!key) {
        return key;
    }

    const keys = key.split('.');
    const fileName = keys.shift();

    const cacheKey = `${fileName}-${locale}`;
    const file = translationCache[cacheKey] || await loadTranslationFile(fileName, locale);

    if (!file) {
        return '';
    }

    return await getTranslation(keys, file);
};

export default getMessage;
