import { appActions, appReducer } from "app/app.slice";
import { authThunks } from "features/auth/auth.slice";
import { ProfileType } from "features/auth/auth.api";


describe("app slice", () => {
  const initialState = {
    error: null as string | null,
    isLoading: false,
    isAppInitialized: false,
  };

  test('initial state of app reducer', () => {
    const initialState = appReducer(undefined, { type: '' });
    expect(initialState).toEqual({
      error: null,
      isLoading: false,
      isAppInitialized: false
    });
  });

  it("should handle correct isLoading value", () => {
    const actual = appReducer(initialState, appActions.setIsLoading({ isLoading: true }));

    expect(actual.isLoading).toBe(true);
  });

  test('setError action of app reducer', () => {
    const error = 'Something went wrong';
    const state = appReducer(initialState, appActions.setError({ error }));
    expect(state.error).toBe(error);
  });

  test('rejected matcher of app reducer when action is not initializeApp', () => {
    const error = new Error('Something went wrong');
    const action = { type: 'some/rejected', payload: error };
    const state = appReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.error).toBe(`Native error ${error.message}`);
  });



});

