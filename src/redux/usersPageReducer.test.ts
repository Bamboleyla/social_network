import {
  actions,
  follow,
  initialStateType,
  usersPageReducer,
} from "./usersPageReducer";
import { usersAPI } from "../api/api";

jest.mock("../api/api");

const usersAPIMock = usersAPI;

//@ts-ignore
usersAPIMock.follow.mockReturnValue({ data: true });

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

describe("followAC", () => {
  it("followAC(1)", () => {
    const newState = usersPageReducer(state, actions.followAC(1));

    expect(newState.users[0].followed).toBeTruthy();
    expect(newState.users[1].followed).toBeFalsy();
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
  });
  it("followAC на изменение повторное изменение", () => {
    const newState = usersPageReducer(state, actions.followAC(3));

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeFalsy();
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
  });
});

describe("unfollowAC", () => {
  it("unfollowAC(3)", () => {
    const newState = usersPageReducer(state, actions.unfollowAC(3));

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeFalsy();
    expect(newState.users[2].followed).toBeFalsy();
    expect(newState.users[3].followed).toBeFalsy();
  });
  it("unfollowAC на изменение повторное изменение", () => {
    const newState = usersPageReducer(state, actions.unfollowAC(4));

    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeFalsy();
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
  });
});
it("setUsersAC", () => {
  const usersList = [
    {
      id: 5,
      followed: true,
      fullName: "abc",
      status: "",
      location: { country: "USA", sity: "Borton" },
      ava: "//http:izuhfviu/lzuhfdv/zlduhfv",
    },
    {
      id: 6,
      followed: true,
      fullName: "Kanqqq",
      status: "puchhhh",
      location: { country: "Russia", sity: "Tomsk" },
      ava: "//http:kkbcks/nfkuhfoiun/cjdh4566",
    },
    {
      id: 7,
      followed: false,
      fullName: "911",
      status: "puchhhh123",
      location: { country: "Russia1", sity: "Tomsk3" },
      ava: "//http:/kunv6/@hddk",
    },
    {
      id: 8,
      followed: true,
      fullName: "_ress/t",
      status: "pu!@#$chhhh",
      location: { country: "Ukrain", sity: "K i e v" },
      ava: "//http:kagg/ikubdif/uhbvv/",
    },
  ];

  const newState = usersPageReducer(state, actions.setUsersAC(usersList));

  expect(newState.users.length).toBe(4);
  expect(newState.users[3].id).toBe(8);
  expect(newState.users[2].followed).toBeFalsy();
  expect(newState.users[0].fullName).toBe("abc");
});
it("setPageAC", () => {
  const newState = usersPageReducer(state, actions.setPageAC(4));
  expect(newState.numberPage).toBe(4);
  expect(newState.users[1].followed).toBeFalsy();
  expect(newState.users[2].fullName).toBe("911");
  expect(newState.totalPages).toBe(5);
  expect(newState.statusPreloader).toBeFalsy();
  expect(newState.buttonDisabled.length).toBe(0);
});
it("setTotalPagesAC", () => {
  const newState = usersPageReducer(state, actions.setTotalPagesAC(40));
  expect(newState.numberPage).toBe(1);
  expect(newState.users[1].followed).toBeFalsy();
  expect(newState.users[2].fullName).toBe("911");
  expect(newState.totalPages).toBe(40);
  expect(newState.statusPreloader).toBeFalsy();
  expect(newState.buttonDisabled.length).toBe(0);
});

describe("setTotalPagesAC", () => {
  it("actions.setPreloaderAC(true)", () => {
    const newState = usersPageReducer(state, actions.setPreloaderAC(true));
    expect(newState.numberPage).toBe(1);
    expect(newState.users[1].followed).toBeFalsy();
    expect(newState.users[2].fullName).toBe("911");
    expect(newState.totalPages).toBe(5);
    expect(newState.statusPreloader).toBeTruthy();
    expect(newState.buttonDisabled.length).toBe(0);
  });
  it("setPreloaderAC если значение совпадает с уже имеющимся", () => {
    const newState = usersPageReducer(state, actions.setPreloaderAC(false));
    expect(newState.numberPage).toBe(1);
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].fullName).toBe("_ress/t");
    expect(newState.totalPages).toBe(5);
    expect(newState.statusPreloader).toBeFalsy();
    expect(newState.buttonDisabled.length).toBe(0);
  });
});

describe("buttonDisabledAC", () => {
  it("buttonDisabledAC = true", () => {
    const newState = usersPageReducer(
      state,
      actions.buttonDisabledAC(true, 15)
    );
    expect(newState.numberPage).toBe(1);
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].fullName).toBe("_ress/t");
    expect(newState.totalPages).toBe(5);
    expect(newState.statusPreloader).toBeFalsy();
    expect(newState.buttonDisabled.length).toBe(1);
    expect(newState.buttonDisabled[0]).toBe(15);
  });
  it("buttonDisabledAC = false и значение buttonDisabled: []", () => {
    const newState = usersPageReducer(
      state,
      actions.buttonDisabledAC(false, 15)
    );
    expect(newState.numberPage).toBe(1);
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].fullName).toBe("_ress/t");
    expect(newState.totalPages).toBe(5);
    expect(newState.statusPreloader).toBeFalsy();
    expect(newState.buttonDisabled.length).toBe(0);
    expect(newState.buttonDisabled[0]).toBeUndefined();
  });
  it("buttonDisabledAC = false и значение buttonDisabled: [6,9,11,16]", () => {
    const initState = (state = {
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
      buttonDisabled: [6, 9, 11, 16],
    });
    const newState = usersPageReducer(
      initState,
      actions.buttonDisabledAC(false, 11)
    );
    expect(newState.numberPage).toBe(1);
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].fullName).toBe("_ress/t");
    expect(newState.totalPages).toBe(5);
    expect(newState.statusPreloader).toBeFalsy();
    expect(newState.buttonDisabled.length).toBe(3);
    expect(newState.buttonDisabled[2]).toBe(16);
    expect(newState.buttonDisabled.includes(11)).toBeFalsy();
  });
});

describe("follow", () => {
  /* const response = usersAPIMock.follow(1, "true");
  console.log("res", response); */
  it("follow", () => {
    const dispatchMock = jest.fn();
    //Подписаться на пользователя
    const followTest = (userID: number) => {
      //Возврашаем Thunk
      //@ts-ignore
      return async (dispatchMock) => {
        dispatchMock(actions.buttonDisabledAC(true, userID));
        //Делаем запрос на отмену или активацию подписки к пользователю
        const result = await usersAPIMock.follow(userID, "true");
        //Если ответ положительный, тогда отписуемся и в state
        if (result.data === true) {
          dispatchMock(actions.followAC(userID));
          dispatchMock(actions.buttonDisabledAC(false, userID));
        }
      };
    };

    const thunk = followTest(1);

    //@ts-ignore
    thunk(dispatchMock);

    expect(dispatchMock).toBeCalledTimes(3);
  });
});
