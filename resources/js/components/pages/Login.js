import React from 'react';
import styled from 'styled-components';
import LoginForm from '../LoginForm'
import { Form } from 'antd';
import { Row, Col } from 'antd';

const Title = styled.div`
  text-align: center;
  background: #ECECEC;
  padding: 30px;
  border-radius: 5px;
`;
const LoginArea = Form.create({ name: 'normal_login' })(LoginForm);

const Login = (props) => {

  return (
    <>
      <Row type="flex" justify="center" align="middle" style={{height:'100%'}}>
          <Col xs={ 16 } lg={ 10 }>
            <Title>
              <LoginArea/>
            </Title>
          </Col>  
      </Row>
    </>
  )

}

export default Login;