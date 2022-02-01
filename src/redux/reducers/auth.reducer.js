import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from '../actionType';

const initialState = {
  accessToken: sessionStorage.getItem('yt-clone-access-token')
    ? sessionStorage.getItem('yt-clone-access-token')
    : null,
  user: sessionStorage.getItem('yt-clone-user')
    ? sessionStorage.getItem('yt-clone-user')
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        loading: false,
        accessToken: payload,
      };

    case LOGIN_FAIL:
      return {
        ...prevState,
        loading: false,
        accessToken: null,
        error: payload,
      };

    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };

    case LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
        user: null,
        loading: false,
      };

    default:
      return prevState;
  }
};
