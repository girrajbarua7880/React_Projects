import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const login = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && email === user.email && pass === user.password) {
      localStorage.setItem("isLoggedIn", true);
      navigate("/dashboard");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-6 shadow rounded w-80">
        <h2 className="text-xl mb-4 text-center">Login</h2>
        <input className="border p-2 w-full mb-2" placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input className="border p-2 w-full mb-2" type="password" placeholder="Password" onChange={e=>setPass(e.target.value)} />
        <button onClick={login} className="bg-black text-white w-full py-2">Login</button>
        <p className="mt-2 text-center cursor-pointer" onClick={()=>navigate("/signup")}>Signup</p>
      </div>
    </div>
  );
}

export default Login;