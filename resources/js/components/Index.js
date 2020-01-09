import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Main from './pages/Main'
import Login from './pages/Login'

const Index = () => {

  const [isLogin, setIsLogin] = useState(true)

  return isLogin ? <Main/> : <Login/>;
  
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
