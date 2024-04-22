import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    //   console.log(filterProduct);
    setProduct(filterProduct[0]);
    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    // console.log(relatedProducts);
    setRelatedProducts(relatedProducts);
    return () => {};
  }, [id, product.category]);

  const addToCart = (id, title, description, price, imgSrc) => {
    const obj = {
      id,
      title,
      description,
      price,
      imgSrc,
    };
    setCart([...cart, obj]);
    // console.log(cart)
    toast.success("Item is Added", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} ₹</button>
          <button
            className="btn btn-warning"
            onClick={() =>
              addToCart(
                product.id,
                product.title,
                product.description,
                product.price,
                product.imgSrc
              )
            }
          >
            Add to Card
          </button>
        </div>
      </div>
      <h1 className="text-center">-=Related Products=-</h1>
      <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
};

export default ProductDetails;
