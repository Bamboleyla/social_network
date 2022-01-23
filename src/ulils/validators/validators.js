/***************************************************************************FUNCTION-VALIDATORS***********************************************************************************************/
//Создаем валидатор required, который при отсутствиивведенного значения в Field будет возврашать ошибку Field is required
export const required = value => {
    if (value) return undefined;
    return 'Field is required';
}

/*****************************************************************************THUNKS-CREATOR***********************************************************************************************/
//Создаем THUNKS-CREATOR для валидации по признаку но с разным переданным значением
/* В этом случае создаем валидатор который проверяет введенное значение в Field на условие не превышающее максимальную длинну строки, в зависимости от нахождения
формы она может быть разной, к примеру не более 30 символов или 100  */
//Передаваемый аргумент maxLength который может использовать замыкание и будет тем условием на которое нужно проверить наш Field
export const maxLengthCreator = (maxLength) => value => {
    /* Если значение переданное в Field присутсвует и длина более maxLength тогда выводим ошибку max length is ${maxLength} symbols, в противном случае undefined */
    if (value && value.length > maxLength) return `max length is ${maxLength} symbols`;
    return undefined;
}