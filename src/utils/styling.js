/**
 * Converts a Font Awesome icon object into a url string that can be used to populate before & after pseudo-elements
 *
 * @param {object} icon
 * @param {string} color
 * @returns {string}
 */
export const iconToData = ({icon}, color = 'currentColor') =>
    `url("data:image/svg+xml,${encodeURIComponent(`<?xml version="1.0" ?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${icon[0]} ${icon[1]}"><path fill="${color}" d="${icon[4]}"></path></svg>`)}")`