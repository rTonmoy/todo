import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  let [fullname, setFullname] = useState("");
  let handleFullname = (e) => {
    setFullname(e.target.value);
  }

  let [fullemail, setFullemail] = useState("");
  let handleFullemail = (e) => {
    setFullemail(e.target.value);
  }

  let [fullpass, setFullPass] = useState("");
  let handleFullpassword = (e) => {
    setFullPass(e.target.value);
  }

  let [details, setDetails] = useState([]);

  let handleLogin = () => {
    // Validation: Check if any field is empty
    if (!fullname || !fullemail || !fullpass) {
      toast.error('Please fill in all fields!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Append the new values to the details array
    setDetails(prevDetails => [...prevDetails, { fullname, fullemail, fullpass }]);

    // Clear the input fields by resetting the state
    setFullname("");
    setFullemail("");
    setFullPass("");
  }

  let handleDelete = (index) => {
    setDetails(prevDetails => prevDetails.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div className="mt-[100px] py-[50px] w-[400px] mx-auto bg-[#33fff5] rounded-[10px]">
        <div className="flex justify-center">
          <input
            onChange={handleFullname}
            value={fullname}
            className="bg-transparent border-b-[#26262649] border-b-[1px] py-[8px] outline-none"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex justify-center mt-[20px]">
          <input
            onChange={handleFullemail}
            value={fullemail}
            className="bg-transparent border-b-[#26262649] border-b-[1px] py-[8px] outline-none"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex justify-center mt-[20px]">
          <input
            onChange={handleFullpassword}
            value={fullpass}
            className="bg-transparent border-b-[#26262649] border-b-[1px] py-[8px] outline-none"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="text-center pt-[15px]">
          <button onClick={handleLogin} className="py-[10px] px-[40px] rounded-[10px] bg-[#262626] text-[#fff]">
            Login
          </button>
        </div>
      </div>

      {details.length > 0 && (
        <div className="mt-[20px] w-[400px] mx-auto bg-[#f5f5f5] rounded-[10px] p-[20px]">
          <ul>
            {details.map((detail, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <strong>Name:</strong> {detail.fullname}, 
                  <strong> Email:</strong> {detail.fullemail}, 
                  <strong> Password:</strong> {detail.fullpass}
                </div>
                <button 
                  onClick={() => handleDelete(index)} 
                  className="bg-red-500 text-white px-[10px] py-[5px] rounded-[5px] ml-[10px]"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <ToastContainer />
    </div>
  )
}

export default Login;
