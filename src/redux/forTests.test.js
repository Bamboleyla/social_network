import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

let InitialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: "YoYoYo",
            status: "what a relif",
            location: { country: "USA", sity: "Borton" },
            ava: "//http:izuhfviu/lzuhfdv/zlduhfv",
        },
        {
            id: 2,
            followed: false,
            fullName: "Kanab1ss",
            status: "puchhhh",
            location: { country: "Russia", sity: "Tomsk" },
            ava: "//http:kkbcks/nfkuhfoiun/cjdh4566",
        },
        {
            id: 3,
            followed: true,
            fullName: "911",
            status: "puchhhh123",
            location: { country: "Russia1", sity: "Tomsk3" },
            ava: "//http:/kunv6/@hddk",
        },
        {
            id: 4,
            followed: false,
            fullName: "_ress/t",
            status: "pu!@#$chhhh",
            location: { country: "Ukrain", sity: "K i e v" },
            ava: "//http:kagg/ikubdif/uhbvv/",
        },
    ],
    numberPage: 1,
    totalPages: 5,
    statusPreloader: false,
    buttonDisabled: [],
};

const functionA = (a, b) => (dispatch) => {
    dispatch({ type: 'CONSTANT_A', payload: a });
    dispatch({ type: 'CONSTANT_B', payload: b });
}

describe('async actions', () => {

    it('should dispatch actions of ConstantA and ConstantB', () => {
        const expectedActions = [
            { type: 'CONSTANT_A', payload: 'a' },
            { type: 'CONSTANT_B', payload: 'b' }
        ]

        const store = mockStore({ InitialState })
        store.dispatch(functionA('a', 'b'))

        let result = store.getActions();
        let newState = store.getState();

        expect(store.getActions()).toEqual(expectedActions)
    })
})