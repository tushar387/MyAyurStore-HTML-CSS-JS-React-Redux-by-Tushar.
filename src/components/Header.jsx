import {BsFillPersonFill} from "react-icons/bs";
import {FaFaceGrinHearts, FaBagShopping} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";




const Header = () => {
    const bag = useSelector((store) => store.bag);

    return (
        <header>
            <div className="logo-container">
                <Link to="/">
                <img 
                className="myshop_home"
                src="images/AyurLogo.png"
                alt="My-Ayur Home"
                />
                </Link>
            </div>
            <div>
            <nav className = "nav_bar">
            <a className="a1" href="#">Home 🏠  </a>
            <a className="a2" href="#">🌿Ayur Plants🌿</a>
            <a className="a3" href="#">🌱Live Plants🌱</a>
            <a className="a4"href="#">🫘Ayur Seeds🫘</a>
            <a className="a5" href="#">🌱Ayur Powder🌱</a>
            
            <a className="a6" href="#">🌱💧Ayur Water💧🌱</a>
             <a className="a7"href="#">
             📖Ayur Books📖 <sup>New </sup>
            </a>
            
            </nav>
            </div>
            <div className="search_bar">
                <button className="materials-symbols-outlined search_icon"> 🔍 </button>
                <input
                className="search_input"
                placeholder="Search for Ayurvedic Home Products live"
                />
            </div>
            <div className="action_bar">
                <div className="action_container">
                    <BsFillPersonFill />
                    <span className="action_name">Profile</span>
                </div>

                <div className="action_container">
                    <FaFaceGrinHearts />
                    <span className="action_name">WishList</span>
                </div>

                <Link className="action_container" to="/bag">
                <FaBagShopping />
                <span className="action_name">Bag</span>
                <span className="bag-item-count">{bag.length}</span>
                </Link>
            </div>
        </header>
    );
};

export default Header; 
