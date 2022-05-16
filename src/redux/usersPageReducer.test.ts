import {
  actions,
  initialStateType,
  usersPageReducer,
} from "./usersPageReducer";

let state: initialStateType;
beforeEach(() => {
  state = {
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
});

test("Проверка followAC", () => {
  const newState = usersPageReducer(state, actions.followAC(1));

  expect(newState.users[0].followed).toBeTruthy();
  expect(newState.users[1].followed).toBeFalsy();
  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeFalsy();
});
test("Проверка followAC на изменение повторное изменение", () => {
  const newState = usersPageReducer(state, actions.followAC(3));

  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeFalsy();
  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeFalsy();
});
test("Проверка unfollowAC", () => {
  const newState = usersPageReducer(state, actions.unfollowAC(3));

  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeFalsy();
  expect(newState.users[2].followed).toBeFalsy();
  expect(newState.users[3].followed).toBeFalsy();
});
test("Проверка unfollowAC на изменение повторное изменение", () => {
  const newState = usersPageReducer(state, actions.unfollowAC(4));

  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeFalsy();
  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeFalsy();
});
