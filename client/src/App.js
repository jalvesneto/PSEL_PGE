import React ,{ useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup";
import './App.css';
import Axios from "axios"

function App() {

  const addUser = (values) => {
    Axios.post("http://localhost:3001/adduser", {
      user: values.user,
      password: values.password,
      name: values.password,
      level: values.level
    }).then((response) => {
      alert(response.data.msg);
    }); 
  };

  const login = (values) => {
    Axios.post("http://localhost:3001/login", {
      user: values.user,
      password: values.password
    }).then((response) =>{
      alert(response.data.msg);
    });
  };

  const validationLogin = yup.object().shape({
    user: yup
      .string()
      .required("O campo Senha é obrigatório!"),
    password: yup
      .string()
      .required("O campo Senha é obrigatório!"),
  });

  const validationAddUser = yup.object().shape({
    user: yup
      .string()
      .required("O campo Usuário é obrigatório!"),
    password: yup
      .string()
      .required("O campo Senha é obrigatório!"),
    name: yup
      .string()
      .required("O campo Nome é obrigatório"),
    level: yup
      .string()
      .required("O campo Nível é obrigatório")
  });

  return (
    <div className="App">
      <img src="logo-2.png" />
      <br />
      <br />
      <Formik initialValues={{}} onSubmit={addUser} validationSchema={validationAddUser}>
        <Form className='login-form'>
          <div>
          <span id="lblUsuario">Usuário</span>  <br /> 
          <Field className="forml-field" name="user" placeholder="Usuário" /></div>
          <ErrorMessage
              component="span"
              name="user"
              className="form-error"
            />
          <div>
          <span id="lblUsuario">Senha</span> <br /> 
          <Field className="forml-field" name="password" placeholder="Senha" type="password"/></div>
          <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          <div>
          <span id="lblUsuario">Nome</span>  <br /> 
          <Field className="forml-field" name="name" placeholder="Nome" /></div>
          <ErrorMessage
              component="span"
              name="name"
              className="form-error"
            />
          <div>
          <span id="lblUsuario">Nivel</span>  <br /> 
          <Field className="forml-field" name="level" placeholder="Nível" /></div>
          <ErrorMessage
              component="span"
              name="level"
              className="form-error"
            />
        <br />
        <input type="submit" name="btncadastrar" value="Cadastrar" id="btncadastrar" />
        </Form>
      </Formik>

      <Formik initialValues={{}}
        onSubmit={login}>
        <Form className='login-form'>
        <span id="lblUsuario">Usuário</span>  
        <div> 
        <Field className="forml-field" name="user" placeholder="Usuario" />
        </div>
        <ErrorMessage
              component="span"
              name="user"
              className="form-error"
            />
        
        <span id="Label2">Senha</span><br />
        <div>
        <Field className="forml-field" name="password" placeholder="Senha" type="password"/>
        </div>
        <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
        
        <br />
        <div>
        <input type="submit" name="btnEntrar" value="Entrar" id="btnEntrar" />
        </div>
        </Form>
      </Formik>
    </div>
  );
  
}

export default App;
