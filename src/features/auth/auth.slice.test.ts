import { authReducer, authThunks } from "features/auth/auth.slice";

describe("authReducer", () => {
  const initialState = {
    profile: null,
    isLoggedIn: false,
    emailForForgotPassword: ""

  };

  it("should login work correctly and return profile", () => {
    const data = {
      email: "Ariiychyk@gmail.com",
      password: "123456789",
      rememberMe: true,
    };

    const profile = {
      _id:"645769820539918be2cdada4",
      email:"Ariiychyk@gmail.com",
      rememberMe:true,
      isAdmin:false,
      name:"Denis",
      verified:true,
      publicCardPacksCount:2,
      created:"2023-05-07T09:04:02.028Z",
      updated:"2023-06-11T09:22:50.933Z",
      __v:0,
      token:"8992ee50-0839-11ee-9a9e-c715e4d908b9",
      tokenDeathTime:1687080170933,
    };

    // 1. Если мы проверяем успешный кейс, тогда пишем fulfilled (authThunks.login.fulfilled)
    // 2. fulfilled принимает 3 параметра
    // 2.1. То, что thunk возвращает
    // 2.2. Ожидает строку. Будем везде писать "requestId" - meta информация.
    // 2.3. То, что thunk принимает
    const action = authThunks.login.fulfilled({ profile }, "requestId", data);

    const state = authReducer(initialState, action);

    expect(state.profile).toEqual(profile);
  });
});
