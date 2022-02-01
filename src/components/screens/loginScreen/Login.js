import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../../../assets/youtube-logo.png';
import { login } from '../../../redux/actions/auth.action';

const Login = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };

  const history = useHistory();

  useEffect(() => {
    if (accessToken) {
      history.push('/');
    }
  }, [accessToken, history]);

  return (
    <div className={'login'}>
      <div className={'login-container'}>
        <img src={logo} alt='' />
        <button onClick={handleLogin} className={'btn btn-primary'}>
          Login with google
        </button>
        <p className={'text-light text-center'}>
          This project made using React, Redux, Firebase, and YouTube API.
        </p>
      </div>
    </div>
  );
};

export default Login;
