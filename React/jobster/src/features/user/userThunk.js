import { logoutUser } from './userSlice';
import { customFetch } from './../../utils/axios';

export const registerUserThunk = async (url, user, Thunk) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return Thunk.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, Thunk) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return Thunk.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (url, user, Thunk) => {
  try {
    const resp = await customFetch.patch(url, user, {
      headers: {
        authorization: `Bearer ${Thunk.getState().user.user.token}`,
      },
    });
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      Thunk.dispatch(logoutUser());
      return Thunk.rejectWithValue('Unauthorized! Logging Out...');
    }
    return Thunk.rejectWithValue(error.response.data.msg);
  }
};
