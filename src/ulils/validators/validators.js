/***************************************************************************FUNCTION-VALIDATORS***********************************************************************************************/
export const required = value => {
    if (value) return undefined;
    return 'Field is required';
}

/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
export const maxLengthCreator = (maxLength) => value => {
    if (value && value.length > maxLength) return `max length is ${maxLength} symbols`;
    return undefined;
}