/**
 * This function takes in a string and returns a new string
 * with `&nbsp;` inbetween words to avoid lonely words in new lines.
 *
 * @param text A text string.
 * @param numWords Amount of words to connect with a `&nbsp;` element
 */

const noMoreLonelyWords = (text: string, numWords = 2): string => {
    // Split the text content of each element into an array
    const textArray = text.split(' ');

    // Remove the last n words and join them with a none breaking space
    const lastWords = textArray.splice(-numWords, numWords).join('\u00A0');

    // Join it all back together and replace the existing
    // text with the new text
    const textMinusLastWords = textArray.join(' ');
    return textMinusLastWords + ' ' + lastWords;
};

export default noMoreLonelyWords;
