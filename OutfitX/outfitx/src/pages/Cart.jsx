// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Cart() {
//   const [items, setItems] = useState([]);
//   const navigate = useNavigate();

//   // Load cart from localStorage
//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("cart")) || [];
//     setItems(data);
//   }, []);

//   //  Remove item
//   const removeItem = (id) => {
//     const updated = items.filter(item => item.id !== id);
//     setItems(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   //  Increase qty
//   const increaseQty = (id) => {
//     const updated = items.map(item =>
//       item.id === id
//         ? { ...item, qty: (item.qty || 1) + 1 }
//         : item
//     );

//     setItems(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   // Decrease qty
//   const decreaseQty = (id) => {
//     const updated = items.map(item =>
//       item.id === id && item.qty > 1
//         ? { ...item, qty: item.qty - 1 }
//         : item
//     );

//     setItems(updated);
//     localStorage.setItem("cart", JSON.stringify(updated));
//   };

//   //  Total price
//   const total = items.reduce(
//     (sum, item) => sum + item.price * (item.qty || 1),
//     0
//   );

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">

//       <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

//       {items.length === 0 ? (
//         <p>Your cart is empty 😢</p>
//       ) : (
//         <>
//           {items.map(item => (
//             <div
//               key={item.id}
//               className="bg-white p-4 mb-3 rounded shadow flex justify-between items-center"
//             >
//               {/* Left */}
//               <div className="flex gap-4 items-center">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 object-cover"
//                 />

//                 <div>
//                   <h3>{item.name}</h3>
//                   <p className="text-green-600">₹{item.price}</p>
//                 </div>
//               </div>

//               {/* Right */}
//               <div className="flex items-center gap-2">

//                 <button onClick={() => decreaseQty(item.id)}>-</button>
//                 <span>{item.qty || 1}</span>
//                 <button onClick={() => increaseQty(item.id)}>+</button>

//                 <button
//                   onClick={() => removeItem(item.id)}
//                   className="bg-red-500 text-white px-2 rounded"
//                 >
//                   Remove
//                 </button>

//               </div>
//             </div>
//           ))}

//           {/* Total */}
//           <div className="bg-white p-4 rounded shadow mt-4">
//             <h2 className="text-xl font-bold">Total: ₹{total}</h2>

//             <button
//               onClick={() => navigate("/checkout")}
//               className="mt-3 bg-black text-white w-full py-2"
//             >
//               Checkout
//             </button>
//           </div>
//         </>
//       )}

//     </div>
//   );
// }

// export default Cart;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // Load cart
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(data);
  }, []);

  
  const removeItem = (id) => {
    const updated = items.filter(item => item.id !== id);
    setItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };


  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 min-h-screen bg-gray-100">

      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty 😢</p>
      ) : (
        <>
          {items.map((item, index) => (
            <div
              key={index} // ✅ fixed duplicate id issue
              className="bg-white p-4 mb-3 rounded shadow flex justify-between items-center"
            >
              {/* Left */}
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />

                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-green-600">₹{item.price}</p>
                </div>
              </div>

              {/* Right */}
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="bg-white p-4 rounded shadow mt-4">
            <h2 className="text-xl font-bold">Total: ₹{total}</h2>

            <button
              onClick={() => navigate("/checkout")}
              className="mt-3 bg-black text-white w-full py-2 rounded hover:bg-gray-800"
            >
              Checkout
            </button>
          </div>
        </>
      )}

    </div>
  );
}

export default Cart;