import { addPostAC, postPageReducer } from "./postPageReducer";

//Тестируемый state
let state = {
    //Информация о пользователе
    userInfo: {
        userID: null,
        userPhoto: null,
        status: null
    },
    //Информация о постах пользователя
    commentsData: [
        { id: 1, message: "Hello World!", likes: "0" },
        { id: 2, message: "I'ts test message from props", likes: "9" },
        { id: 3, message: "I like it", likes: "10" },
        { id: 4, message: "Yahoo", likes: "5" },
        { id: 5, message: "I'ts work, i'ts wonderfull", likes: "3" },
    ]
}

it('length of posts should be incremented', () => {

    // 1.Test data
    let action = addPostAC('new post')

    // 2.Action
    let newState = postPageReducer(state, action);

    // 3.expectation
    expect(newState.commentsData.length).toBe(6);
    expect(newState.commentsData[5].message).toBe('new post');
    expect(newState.commentsData[5].id).toBe(6);
    expect(newState.commentsData[5].likes).toBe(0);
});

it('length of posts should be incremented', () => {

    // 1.Test data
    let action = addPostAC('')

    // 2.Action
    let newState = postPageReducer(state, action);

    // 3.expectation
    expect(newState.commentsData.length).toBe(6);
    expect(newState.commentsData[5].message).toBe('');
    expect(newState.commentsData[5].id).toBe(6);
    expect(newState.commentsData[5].likes).toBe(0);
});