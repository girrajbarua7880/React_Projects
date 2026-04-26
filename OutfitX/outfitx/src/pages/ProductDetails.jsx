import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); 

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h1>Product not found</h1>;

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // simple add
    cart.push({ ...product, qty: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🛒");

    // redirect
    navigate("/cart");
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow flex gap-6">

        <img
          src={product.image}
          className="w-64 h-64 object-cover"
        />

        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <p className="text-green-600 text-xl mt-2">
            ₹{product.price}
          </p>

          <p className="mt-2 text-gray-600">
            This is a high-quality product for daily use.
          </p>

          <button
            onClick={addToCart}
            className="mt-4 bg-black text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;