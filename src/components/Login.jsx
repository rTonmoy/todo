import React, { useState } from 'react'

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
    // Append the new values to the details array
    setDetails(prevDetails => [...prevDetails, { fullname, fullemail, fullpass }]);
  }

  return (
    <div>
      <div className="mt-[100px] py-[50px] w-[400px] mx-auto bg-[#33fff5] rounded-[10px]">
        <div className="flex justify-center">
          <input
            onChange={handleFullname}
            className="bg-transparent border-b-[#26262649] border-b-[1px] py-[8px] outline-none"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex justify-center mt-[20px]">
          <input
            onChange={handleFullemail}
            className="bg-transparent border-b-[#26262649] border-b-[1px] py-[8px] outline-none"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex justify-center mt-[20px]">
          <input
            onChange={handleFullpassword}
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
              <li key={index}>
                <strong>Name:</strong> {detail.fullname}, 
                <strong> Email:</strong> {detail.fullemail}, 
                <strong> Password:</strong> {detail.fullpass}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Login;
