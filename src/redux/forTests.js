//Для ТЕСТОВ
export const functionA = (a, b) => (dispatch) => {
    dispatch({ type: 'CONSTANT_A', payload: a });
    dispatch({ type: 'CONSTANT_B', payload: b });
}