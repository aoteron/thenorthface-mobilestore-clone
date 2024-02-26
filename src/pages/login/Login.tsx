// Login.tsx
import React, { useEffect, useState } from 'react';
import { useAuthDispatch } from '../../components/contexts/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';
import { User } from '../../data/usersData.ts';
import { useUsersContext } from '../../components/contexts/UserContext.tsx';
import Header from '../../components/header/Header.tsx'

async function getUserData() {
  try {
    const data = await fetch('src/data/users.json');
    const JSONdata = await data.json();
    return JSONdata;
  } catch (error) {
    console.log(error)
  }
}

// interface LoginFormProps {
//   onSubmit: (formData: { username: string; password: string }) => void; 
// }

// const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault(); 
//     onSubmit({ username, password }); 
//   };

  export function Login() {
    const userCtxt = useUsersContext();
    const [users, setUsers] = useState([] as User[]);
    const [userData, setUserData] = useState({ usermail: "", password: "" });
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();

  useEffect (() => {
    async function dataUsers() {
    const allUsersData = await getUserData();
    setUsers(allUsersData);
    }
    dataUsers();
  }, []);

  function handleLogin () {
    dispatch({ type: "LOGIN" });
    navigate('/main');
  }

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {ev.preventDefault();
    
    const { usermail, password } = userData;

    const userTrue = users.find(
      (element) => usermail === element.mail && password === element.password
      );

      if (userTrue) {
        handleLogin();
        userCtxt.setUser(userTrue);
      } else {
        alert('Incorrect mail or password')
      }
    }

  return (
    <>
    <section>
      <Header />
    </section>

    <section>
      <div>
        <h3>LOG IN TO YOUR ACCOUNT</h3>

          <p>Sign in to view your orders, request a return, and more. And if you are also a member of the XPLR Pass loyalty program, you can enjoy a lot of exclusive benefits.
          </p>

          <p>Haven't you suscribed to XPLR Pass yet? <br></br>
                Create your account in the section of the top
          </p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="User"
            value={userData.usermail}
            onChange={(e) => setUserData({...userData, usermail:e.target.value})}
          />
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value })}
          />
          
          <div>
            <p>Forgot password?</p>
          </div>

          <div>
            {/* Botón de enviar el formulario */}
            <button type="submit">LOG IN</button>
            <br></br>
            <button type="submit">SIGN UP</button>
          </div>
        </form>
      </div>
    </section>
    </>
  );
}

export default Login;