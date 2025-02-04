import { DASH, EMPTY_STRING, SINGLE_SPACE } from '../constants/AppConstants';

/**
 * Converts a text string to Proper Case (Title Case).
 * By default, it splits the text by the provided delimiter (e.g., '-').
 *
 * @param {string} text - The text string to be converted to Proper Case.
 * @param {string} [delimiter=DASH] - The delimiter to split the text on.
 * @returns {string} - The Proper Case formatted string.
 */
export const toProperCase = (text, delimiter = DASH) => {
    return text
        .split(delimiter)
        .map(word => capitalizeWord(word))
        .join(SINGLE_SPACE);
};

/**
 * Capitalizes the first letter of a word and lowercases the rest.
 *
 * @param {string} word - The word to capitalize.
 * @returns {string} - The capitalized word.
 */
const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

/**
 * Extracts the first number from a chapter string.
 *
 * @param {string} chapter - The chapter string containing the chapter number.
 * @returns {string} - The extracted chapter number or an empty string if none found.
 */
export const extractChapterNumber = (chapter) => chapter.match(/\d+/)?.[0] || EMPTY_STRING;

/**
 * Formats an array of image strings to Base64 encoded image data URLs.
 *
 * @param {Array<string>} images - The array of image strings to be formatted.
 * @returns {Array<string>} - The array of Base64 image data URLs.
 */
export const formatImages = (images) => images.map((img) => `data:image/png;base64,${img}`);

/**
 * Converts a camelCase string to Proper Case.
 *
 * @param {string} str - The camelCase string to convert.
 * @returns {string} - The string converted to Proper Case.
 */
export const camelToProperCase = (str) => {
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')  // Add space before capital letters
        .replace(/^./, (match) => match.toUpperCase());  // Capitalize the first letter
};
