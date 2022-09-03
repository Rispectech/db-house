import axios from 'axios';
import store from 'store2';
// import { strictValidString, validObjectWithParameterKeys } from './commonUtils';

const api = axios.create({
  headers: { 'Content-Type': 'application/json' },
  baseURL: process.env.REACT_APP_API_HOST,
});

// Request interceptor
api.interceptors.request.use(
  function (config) {
    let user = store.get('user');
    let token = user && user.accessToken;
    if (token) config.headers['x-access-token'] = token;
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // const newToken =
    //   validObjectWithParameterKeys(response, ['data']) &&
    //   validObjectWithParameterKeys(response.data, ['token']) &&
    //   response.data.token;

    // const userState = JSON.parse(Cookies.get('user'));
    // const { token: currToken } = userState;

    // if (newToken && !currToken) {
    //   const newState = { ...userState, token: newToken };
    //   Cookies.set('user', JSON.stringify(newState));
    // }
    return response.data;
  },
  function (error) {
    // let updatedError;
    // // Any status codes that falls outside the range of 2xx cause this function to trigger
    // const isValidErrorObject =
    //   validObjectWithParameterKeys(error, ['response']) &&
    //   validObjectWithParameterKeys(error.response, ['status', 'data']);
    // if (isValidErrorObject) {
    //   const { data = {} } = error.response;
    //   const { message } = data;
    //   if (strictValidString(message)) {
    //     updatedError = message;
    //   } else {
    //     updatedError = 'Oops! Something went wrong.';
    //   }
    // } else if (strictValidString(error)) {
    //   updatedError = error;
    // } else {
    //   updatedError = 'Oops! Something went wrong.';
    // }
    return Promise.reject(error);
  },
);

export default api;