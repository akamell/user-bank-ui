import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import axios from 'axios';

const Home = () => {

  useEffect(() => {
    getUser();
  }, []);

  const [ id, setId ] = useState("");
  const [ name, setName ] = useState("");
  const [ lastname, setLastname ] = useState("");
  const [ username, setUsername ] = useState("");
  const [ createdAt, setCreatedAt ] = useState("");
  const [ updatedAt, setUpdatedAt ] = useState("");

  const getUser = () => {
    var token = localStorage.getItem('token');
    let config = {
      headers: {
        'Authorization': token
      }
    }
    axios.get("http://testbeanstask-env.eba-pihjvfdr.us-east-2.elasticbeanstalk.com/api/user", config)
    .then(function (response) {
      console.log(response.data);
      message.success('Información del usuario obtenida con exito');
      const { id, username, name, lastname, createdAt, updatedAt } = response.data;
      setId(id);
      setName(name);
      setLastname(lastname);
      setUsername(username);
      setCreatedAt(createdAt);
      setUpdatedAt(updatedAt);
    })
    .catch(function (error) {
      message.error('Usuario o contraseña incorrectos');
    });
  };

  if(id.length == 0) {
    return <div> Invalid user! </div>
  }
  
  return (
    <div style={{
      display:'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 100,
    }}>
      <h3>Hola {name} {lastname} !</h3>
      <div> user name: {username} </div>
      <div> Fecha de creación: {createdAt} </div>
      <div> Ultima actualización: {updatedAt} </div>
    </div>
  );
};

export default Home;