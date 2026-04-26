
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const goToDetails = () => {
    navigate(`/product/${product.id}`);
  };

  

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ ...product, qty: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🛒");
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">

      
      <div className="h-40 w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className="p-3">
        <h2 className="font-semibold">{product.name}</h2>
        <p className="text-green-600 font-bold">₹{product.price}</p>

        
        <button
          onClick={addToCart}
          className="mt-2 bg-black text-white w-full py-1 rounded"
        >
          Add to Cart
        </button>

     
        <button
          onClick={goToDetails}
          className="mt-2 bg-gray-800 text-white w-full py-1 rounded"
        >
          View Details
        </button>
      </div>

    </div>
  );
}

export default ProductCard;