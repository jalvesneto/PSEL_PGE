import React ,{ useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({
    user: '',
    password: ''
  })

  const [status, setStatus] = useState({
    type: '',
    mesage: ''
  })

  

  return (
    <div className="App">
      <img src="logo-2.png" />
      <br />
      <form>
      <span id="lblUsuario">Usuário</span>  
      <div class="form-group olhosenha"> 
      
      <input name="user" type="text" id="user"  placeholder="Digite o usuário"  />
      </div>
      <span id="Label2">Senha</span><br />
      <div class="form-group olhosenha">
      <input name="password" id="password" type="password" placeholder="Digite a senha"  />
      </div>
      <br />
      <div>
      <input type="submit" name="btnEntrar" value="Cadasrar" id="btnEntrar" />
      </div>
      </form>

      <form>
      <span id="lblUsuario">Usuário</span>  
      <div class="form-group olhosenha"> 
      
      <input name="user" type="text" id="user"  placeholder="Digite o usuário"  />
      </div>
      <span id="Label2">Senha</span><br />
      <div class="form-group olhosenha">
      <input name="password" id="password" type="password" placeholder="Digite a senha"  />
      </div>
      <br />
      <div>
      <input type="submit" name="btnEntrar" value="Entrar" id="btnEntrar" />
      </div>
      </form>
    </div>
  );
  
}

export default App;
