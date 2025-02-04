import {format, isValid} from 'date-fns';

/**
 * Utility function to format a date, either from an object or a date string.
 * The function can handle objects containing a `date` property or direct date strings.
 * The output format is customizable via the `formatType` parameter.
 *
 * @param {Object|string} input - The input can be a date string or an object with a `date` property.
 * @param {string} [formatType='short'] - Optional custom date format type ('short', 'long', 'iso', 'time').
 * @returns {string|Object} - The formatted date as a string, or the original input if no valid date is found.
 * @throws {Error} - Throws an error if the input is invalid or the date is in an incorrect format.
 */
// export const formatDate = (input, formatType = 'short') => {
//     // If input is an object, extract the `date` property
//     let dateValue = input;
//     if (typeof input === 'object' && input.date) {
//         dateValue = input.date;
//     }
//
//     // If dateValue is not a valid date string, return the original input
//     if (!dateValue || typeof dateValue !== 'string') {
//         console.warn('No valid date string found in the input.');
//         return input;  // Return original input if there's no valid date
//     }
//
//     // Parse the date string into a Date object
//     const date = new Date(dateValue);
//
//     // Validate the date
//     if (!isValid(date)) {
//         throw new Error('The provided date is invalid.');
//     }
//
//     // Define format options based on the formatType
//     let formatOptions;
//     switch (formatType) {
//         case 'short':
//             // Format: "6 Dec 25" (short date format)
//             formatOptions = {
//                 day: 'numeric',
//                 month: 'short',
//                 year: '2-digit',
//             };
//             break;
//         case 'long':
//             // Format: "6 December 2025" (long date format)
//             formatOptions = {
//                 day: 'numeric',
//                 month: 'long',
//                 year: 'numeric',
//             };
//             break;
//         case 'iso':
//             // Format: "2025-01-06" (ISO 8601 format)
//             formatOptions = {
//                 year: 'numeric',
//                 month: '2-digit',
//                 day: '2-digit',
//             };
//             break;
//         case 'time':
//             // Format: "03:56 AM" (Time only in 12-hour format)
//             formatOptions = {
//                 hour: '2-digit',
//                 minute: '2-digit',
//                 hour12: true,
//             };
//             break;
//         default:
//             // Default to "short" format if no valid formatType is provided
//             formatOptions = {
//                 day: 'numeric',
//                 month: 'short',
//                 year: '2-digit',
//             };
//             break;
//     }
//
//     // Return the formatted date
//     return date.toLocaleDateString('en-GB', formatOptions);
// };


export const formatDate = (item) => {
    if (!item || !item.date) {
        return item;
    }

    const date = new Date(item.date);

    if (!isValid(date)) {
        throw new Error('The date format is invalid');
    }
    return format(date, 'dd-MMM-yyyy');
};


export const formatDateA = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: '2-digit' };
    return date.toLocaleDateString('en-GB', options);
};