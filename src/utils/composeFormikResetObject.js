export const composeResetObject = (formState) => {
    const resetObject = Object.assign({}, formState);
    const setAll = (obj, val) => Object.keys(obj).forEach(k => obj[k] = val)
    const setNull = obj => setAll(obj, null)
    setNull(resetObject)

    return resetObject
}
