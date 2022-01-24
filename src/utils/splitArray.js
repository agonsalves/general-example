export const splitAlphaList = (arr) => {
    return arr.reduce((acc, cv, i) => {
        if (i < arr.length / 2)
            acc[0].push(cv)
        else
            acc[1].push(cv)

        return acc
    }, [[], []])
}

export const splitOfficeByType = (arr) => {
    return arr.reduce((acc, cv, i) => {
        if (cv.type === 'type-office')
            acc[0].push(cv)
        else
            acc[1].push(cv)

        return acc
    }, [[], []])
}

export const getUnique = (arr, comp) => {
    // store the comparison  values in array
    const unique = arr.map(e => e[comp])
        // store the indexes of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the false indexes & return unique objects
        .filter((e) => arr[e]).map(e => arr[e])
    return unique
}
