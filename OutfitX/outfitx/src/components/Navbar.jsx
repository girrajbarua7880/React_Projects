import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar({ setSearch }) {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  // 🛒 Load cart count
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <div className="flex justify-between items-center px-6 py-3 bg-black text-white">

      {/* Logo */}
      <h1
        onClick={() => navigate("/dashboard")}
        className="cursor-pointer text-xl font-bold"
      >
        👕 OutfitX
      </h1>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded px-3 py-1 w-1/3">
        <input
          type="text"
          placeholder="Search products..."
          className="outline-none w-full text-black"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* 🛒 Cart Button */}
        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <span className="text-2xl">🛒</span>

          {/* Cart Count Badge */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        {/* Logout */}
        <button
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            navigate("/");
          }}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;