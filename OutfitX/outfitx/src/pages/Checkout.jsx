import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [mail, setMail] = useState("");
  const navigate = useNavigate();

  // Load cart
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  // Total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  // Place order
  const placeOrder = () => {
    if (!name || !address || !phone || !state || !pincode || !mail) {
      alert("Please fill all details ❗");
      return;
    }

    alert("Order placed successfully 🎉");

    // clear cart
    localStorage.removeItem("cart");

    // redirect to home
    navigate("/Dashboard");
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">

      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-6">

        
        <div className="bg-white p-4 rounded shadow">

          <h2 className="text-lg font-semibold mb-3">
            Shipping Details
          </h2>

          <input
  type="text"
  placeholder="Full Name"
  className="border p-2 w-full mb-3"
  onChange={(e) => setName(e.target.value)}
/>

<input
  type="email"
  placeholder="Email"
  className="border p-2 w-full mb-3"
  onChange={(e) => setMail(e.target.value)}
/>

<input
  type="text"
  placeholder="Phone Number"
  className="border p-2 w-full mb-3"
  onChange={(e) => setPhone(e.target.value)}
/>

<input
  type="text"
  placeholder="State"
  className="border p-2 w-full mb-3"
  onChange={(e) => setState(e.target.value)}
/>

<input
  type="text"
  placeholder="Pincode"
  className="border p-2 w-full mb-3"
  onChange={(e) => setPincode(e.target.value)}
/>

<input
  type="text"
  placeholder="Address"
  className="border p-2 w-full mb-3"
  onChange={(e) => setAddress(e.target.value)}
/>
          

          <button
            onClick={placeOrder}
            className="bg-black text-white w-full py-2 rounded"
          >
            Place Order
          </button>

        </div>

        {/* 🛒 Order Summary */}
        <div className="bg-white p-4 rounded shadow">

          <h2 className="text-lg font-semibold mb-3">
            Order Summary
          </h2>

          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.name} x {item.qty || 1}</span>
                <span>₹{item.price * (item.qty || 1)}</span>
              </div>
            ))
          )}

          <hr className="my-3" />

          <h3 className="font-bold text-xl">
            Total: ₹{total}
          </h3>

        </div>

      </div>

    </div>
  );
}

export default Checkout;