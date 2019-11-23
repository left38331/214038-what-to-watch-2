import axios from 'axios';
import {ActionCreator} from './reducers/actions-creator';

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 400) {
      dispatch(ActionCreator.requireAuthorization(true));
      // eslint-disable-next-line no-alert
      alert(`Введите валидные данные`);
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
