import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = () => {
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ name, email, password })
    );

    alert("Signup successful ");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      
      <div className="bg-white p-6 rounded shadow w-80">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Account
        </h2>

        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-2 rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-2 rounded"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-3 rounded"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition"
        >
          Signup
        </button>

        <p
          className="text-center mt-3 text-sm cursor-pointer text-blue-500"
          onClick={() => navigate("/")}
        >
          Already have an account? Login
        </p>

      </div>

    </div>
  );
}

export default Signup;