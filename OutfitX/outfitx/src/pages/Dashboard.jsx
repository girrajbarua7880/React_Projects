
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Category from "../components/Category";
import ProductList from "../components/ProductList";
import { products } from "../data/products";

function Dashboard() {
  const navigate = useNavigate();

  const [filtered, setFiltered] = useState(products);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/");
    }
  }, []);


  useEffect(() => {
    let result = products;

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    if (search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  }, [category, search]);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar setSearch={setSearch} />

      {/* Category */}
      <Category setCategory={setCategory} />

      {/* Products */}
      <div className="p-6">
        <ProductList products={filtered} />
      </div>

    </div>
  );
}

export default Dashboard;