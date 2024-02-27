// Login.tsx
import React, { useEffect, useState } from 'react';
import { useAuthDispatch } from '../../components/contexts/AuthContext.tsx';
import { useNavigate } from 'react-router-dom';
import { User } from '../../data/usersData.ts';
import { useUsersContext } from '../../components/contexts/UserContext.tsx';
import Header from '../../components/header/Header.tsx'
import FakeHeader from '../../components/header/FakeHeader.tsx';
import XPLRLogo from '../../assets/icons/xplr-pass-logo.svg'
import BgGIF from '../../assets/northface-index-gif.png'

async function fetchUserData() {
  try {
    const data = await fetch('src/data/users.json');
    const JSONdata = await data.json();
    return JSONdata;
  } catch (error) {
    console.log(error)
  }
}

  export function Login() {
    const userCtxt = useUsersContext();
    const [users, setUsers] = useState([] as User[]);
    const [userData, setUserData] = useState({ usermail: "", password: "" });
    const dispatch = useAuthDispatch();
    const navigate = useNavigate();

  useEffect (() => {
    async function dataUsers() {
    const allUsersData = await fetchUserData();
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
      <FakeHeader />
    </section>
    <Header/>

    <div className='relative'>
      <div className='absolute inset-0 z-0'>
    <div className="flex justify-center items-center">
        <img src={BgGIF} alt='Fondo GIF' className='object-cover' />
      </div>
    </div>
    </div>
    <div className='relative z-10'>

    <section className='flex justify-center'>
      <div style={{ width: '361px', height: '78px' }} className='bg-primary flex flex-col items-center justify-center mt-6 text-secondary'>
      <img src={XPLRLogo} style={{ width: '80px' }} alt="XPLR Logo" />
      <p className='underline hover:text-tertiary transition-colors duration-200 ease-in cursor-pointer text-lg mt-1'>Create an account</p>
      </div>
    </section>

    <section className='flex justify-center mt-4' id='LOGIN'>
      <div style={{ width: '361px', height: '530px' }} className='border border-primary p-10 bg-secondary bg-opacity-60 flex flex-col justify-between'>

        <h3 className='flex justify-center text-x18 font-semibold tracking-tighter pt--4'>LOG IN TO YOUR ACCOUNT</h3>
          <p className='text-x16'>Sign in to view your orders, request a return, and more. And if you are also a member of the XPLR Pass loyalty program, you can enjoy a lot of exclusive benefits.
          </p>

          <p className='text-x14 font-bold'>Haven't you suscribed to XPLR Pass yet? <br></br>
                  Create your account in the section of the top
          </p>
          
          <form onSubmit={handleSubmit} className=''>
            <div className='flex flex-col'>
            <input className='border text-x14'
              style={{ height: '40px' }}
              type="text"
              placeholder="Email adress"
              value={userData.usermail}
              onChange={(e) => setUserData({...userData, usermail:e.target.value})}
              />
            <input className='border mt-4 text-x14'
              style={{height: '40px' }}
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={(e) => setUserData({...userData, password: e.target.value })}
              />
            <p className='mt-4 underline text-x16'>Forgot password?</p>
            </div>
          </form>

            <div className='flex flex-col mt-4'>
              <button className='bg-primary text-secondary text-x18 font-semibold p-2' type="submit">LOG IN</button>
              <button className='bg-primary text-secondary text-x18 font-semibold p-2 mt-2'type="submit">SIGN UP</button>
            </div>
      </div>
    </section>
    </div>
    </>
  );
}

export default Login;