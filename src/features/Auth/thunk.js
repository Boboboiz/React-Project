import { AuthService } from "./services/auth";

export const login = (data) => {
  return async (dispatch) => {
    try {
      const res = await AuthService.login(data);

      dispatch({
        type: "LOGIN",
        payload: res.data.content,
      });
      localStorage.setItem('mt', res.data.content.accessToken)
    } catch (err) {
        console.log(err)
    }
  };
};
