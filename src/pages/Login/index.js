import React, { useState } from 'react';
import { message, Input, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { Container, Top, Body } from './styled';
import axios from 'axios';

const Login = (props) => {
  let navigate = useNavigate();
  const [ username, setUsername ] = useState("Kamell");
  const [ password, setPassword ] = useState("123456");

  const onClickLogin = () => {

    const data = {
      username,
      password,
    };

    axios.post('http://testbeanstask-env.eba-pihjvfdr.us-east-2.elasticbeanstalk.com/api/login', data)
    .then(function (response) {
      console.log(response.data);
      localStorage.setItem('token', response.data);
      message.success('Se autentico exitosamente');
      navigate('/home');
    })
    .catch(function (error) {
      message.error('Usuario o contraseña incorrectos');
    });
  }

  return (
    <Container>
      <Top>
        <img src={process.env.PUBLIC_URL+'/scotiabank-colpatria-red.svg'} width='400'/>
      </Top>
      <Body>
        <h3> Ingresa a tu banca Virtual </h3>
        <Input placeholder="Nombre de usuario" value={username} onChange={e => setUsername(e.target.value)}/>
        <Input.Password placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)}/>
        <Button type="primary" onClick={onClickLogin}> Ingresar </Button>
      </Body>
    </Container>
  );
};

export default Login;