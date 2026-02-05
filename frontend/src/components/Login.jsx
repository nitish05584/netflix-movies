import React, { useState } from 'react'
import Header from './Header'
import axios from "axios"
import { API_END_POINT } from '../util/constant';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const loginHandler = () => {
        setIsLogin(!isLogin);
    }
     
    const getInputData=async(e)=>{
        e.preventDefault();
        if(isLogin){
          const user={email,password};
          try{
            const res=await axios.post(`${API_END_POINT}/login`,user,{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true 
            });
            
            if(res.data.success){
              toast.success(res.data.message); 
            }
             dispatch(setUser(res.data.user));
            navigate("/browse");
          }catch(error){
    
            console.log(error);
          }
        }else{
        const user={fullName,email,password};
        try{
        const res=await axios.post(`${API_END_POINT}/register`,user,{
            headers:{
                'Content-Type':'application/json'
            },
            withCredentials:true
        });
            
            if(res.data.success){
              toast.success(res.data.message); 
            }
            setIsLogin(true);
        }catch(error){
            toast.error(error.response.data.message);
        console.log(error);
        }
    }

        setFullName("");
        setEmail("");
        setPassword("");

    }






    return (
        <div>

            <Header />
            <div className='absolute'>
                <img className='w-[190vh] bg-cover ' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw" alt="browser" />
            </div>
            <form onSubmit={getInputData}className='flex flex-col w-69 px-12 py-50  my-50 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90 h-80'>
                <h1 className='font-bold text-white flex items-center justify-center text-[30px] mt-[-2px]'>{isLogin ? "Login" : "Signup"}</h1>
                <div className='flex flex-col'>
                    {
                        !isLogin && <input value={fullName} onChange={(e) => setFullName(e.target.value)} type='text' placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    }



                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />

                    <input
                        value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
                    <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{!isLogin ? "Signup" : "Login"}</button>


                    <p className='text-white mt-2'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>

                </div>
            </form>
        </div>
    )
}

export default Login
