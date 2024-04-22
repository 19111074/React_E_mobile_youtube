import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { useState } from "react";
import Cart from "./Cart";
import { BsFillCartCheckFill } from "react-icons/bs";


const Nav = ({ setdata, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm('')
  };

  const productbyfilter = (category) => {
    const element = items.filter((prod) => prod.category === category);
    setdata(element);
  };

  const productbyprice = (price) => {
    const element = items.filter((prod) => prod.price >= price);
    setdata(element);
  };
  return (
    <>
      <header className="sticky-top">
        <div className="nav_bar">
          <Link to={"/"} className="brand_logo">
            E-Cart
          </Link>
          {/* ====== Header Seach bar start ====== */}

          <form onSubmit={handleSearch} className="search_bar">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search"
            />
          </form>

          {/* ====== Header Seach bar end ========= */}

          <Link to={"/cart"} className="cart_bar">
            <button type="button" className="btn btn-primary position-relative">
              <BsFillCartCheckFill />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>

        {
          location.pathname == '/' && (

            <div className="nav_bar_wrap">
              <div className="items">Filters by{"->"}</div>
              <div className="items" onClick={() => setdata(items)}>
                No Filter
              </div>
              <div className="items" onClick={() => productbyfilter("mobiles")}>
                Mobiles
              </div>
              <div className="items" onClick={() => productbyfilter("laptops")}>
                Laptops
              </div>
              <div className="items" onClick={() => productbyfilter("tablets")}>
                Tablets
              </div>
              <div className="items" onClick={() => productbyprice(29999)}>
                {">="}29999
              </div>
              <div className="items" onClick={() => productbyprice(49999)}>
                {">="}49999
              </div>
              <div className="items" onClick={() => productbyprice(69999)}>
                {">="}69999
              </div>
              <div className="items" onClick={() => productbyprice(89999)}>
                {">="}89999
              </div>
            </div>
          )}
      </header>
    </>
  );
};

export default Nav;
