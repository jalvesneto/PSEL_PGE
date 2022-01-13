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
    <div>
      
    <div className="App">
      <img src="logo-2.png" />
      <br />
      <br />
      {/* <Formik initialValues={{}} onSubmit={addUser} validationSchema={validationAddUser} name="form-cadastro">
        <Form className='login-form'>
          <div>
          <span id="lblUsuario">Usuário</span>  <br /> 
          <Field className="form-field" name="user" placeholder="Usuário" /></div>
          <ErrorMessage
              component="span"
              name="user"
              className="form-error"
            />
          <div>
          <span id="lblUsuario">Senha</span> <br /> 
          <Field className="form-field" name="password" placeholder="Senha" type="password"/></div>
          <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          <div>
          <span id="lblUsuario">Nome</span>  <br /> 
          <Field className="form-field" name="name" placeholder="Nome" /></div>
          <ErrorMessage
              component="span"
              name="name"
              className="form-error"
            />
          <div>
          <span id="lblUsuario">Nivel</span>  <br /> 
          <Field className="form-field" name="level" placeholder="Nível" /></div>
          <ErrorMessage
              component="span"
              name="level"
              className="form-error"
            />
        <br />
        <input type="submit" name="btncadastrar" value="Cadastrar" id="btncadastrar" />
        </Form>
      </Formik> */}

      <Formik initialValues={{}}
        onSubmit={login} validationSchema={validationLogin} name="form-login">
        <Form className='login-form'>
        <span id="lblUsuario">Usuário</span>  
        <div> 
        <Field className="form-field" name="user" placeholder="Digite o Usuário" />
        </div>
        <ErrorMessage
              component="span"
              name="user"
              className="form-error"
            />
        <div>
        <span id="Label2">Senha</span><br />
        <Field className="form-field" name="password" placeholder="Digite a Senha" type="password" />
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
    <div class="col-lg-6 bg-image">
                {/* <img src="fachada-natal.png"/> */}
                <div class="col-md-5 alert alert-info object" role="alert">
                    <div  style={{float: 'right', marginRight: '-45px', marginBottom: '-95px'}}>
                        <a id="linkWhatsApp" class="tooltip-demo" href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5579991912162" target="_blank">
                        <i class="fab fa-whatsapp fa-5x" aria-hidden="true" title="Atendimento SGP"></i>
                        </a>
                    </div>
                    <div class="col-lg-11 text-left">
                        <p >
                            <b>Atendimento pelo WhatsApp</b><br />
                            <span class="footerInfo" ><b>Segunda a Sexta, das 7h às 13h.</b></span>
                        </p>
                    </div>
                    <div class="col-lg-12 text-left">
                        <div class="col-lg-6 nopadding">
                            <p style={{width: '50%'}, {height: 'auto'}, {display:  'inline'}} >
                                <b>
                                    <a id="HyperLink2" href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5579991912162" target="_blank" >(79) 99191-2162 <br /> <span>Suporte</span></a>
                                </b>
                            </p>
                        </div>
                        <div class="col-lg-6 nopadding">
                            <p >
                                <b>
                                    <a id="HyperLink3" href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5579991912482" target="_blank" >(79) 99191-2482 <br /> <span >Desenvolvimento</span></a>
                                </b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
  </div>

  );
  
}

export default App;
