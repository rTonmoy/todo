import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {useNavigate} from "react-router-dom"
import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Signup = () => {
  const db = getDatabase();

    const auth = getAuth();
    let navigate = useNavigate("")

let [name, setName] = useState("")
let handleName = (e) =>{
  setName(e.target.value)
}

    let [email, setEmail] = useState("")
    let handleEmail =(e)=>{
        setEmail(e.target.value);
        
    }

    let [password, setPassword] = useState("")
    let handlePass =(e)=>{
        setPassword(e.target.value)
    }

    let handleBtn = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            toast("SignUP Done!")
            setTimeout(() => {
              navigate("/login")
          },1000);
          }).then(()=>{
            set(ref(db, 'users/' + user.user.uid), {
              username: name,
              email: email,
            });
          
            
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }

  return (
    <div>
      <div className="mt-[100px] py-[50px] w-[400px] mx-auto bg-[#33fff5] rounded-[10px]">

      <div className="flex justify-center">
          <input
          onChange={handleName}
            className="bg-transparent border-b-[#26262649] border-b-[1px] py-[8px] outline-none"
            type="text"
            placeholder="Name"
          />
        </div>
        
        <div className="flex justify-center mt-[20px]">
          <input
          onChange={handleEmail}
            className="bg-transparent border-b-[#26262649] border-b-[1px] py-[8px] outline-none"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex justify-center mt-[20px]">
          <input
          onChange={handlePass}
            className="bg-transparent border-b-[#26262649] border-b-[1px] py-[8px] outline-none"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="text-center pt-[15px]">
          <button
            onClick={handleBtn}
            className="py-[10px] px-[40px]  rounded-[10px] bg-[#262626] text-[#fff]"
          >
            Sign up
          </button>
        </div>
      </div>
      <ToastContainer
      position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored" />
    </div>
  );
};

export default Signup;
