import { useContext, useState, useRef, useEffect } from "react"
import { assets } from "../assets/assets"
import { NavLink, Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
import { toast } from "react-toastify"

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { sb, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate("/login");
        localStorage.removeItem("token");
        setToken("");
        setCartItems(null);
        toast.success("You are Successfully Logged Out");
    }

    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);   

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="flex items-center justify-between py-3 font-medium">

            <Link to="/"><img src={assets.logo} className="w-30 h-16" /></Link>

            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
                <NavLink to="/" className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/collection" className="flex flex-col items-center gap-1">
                    <p>COLLECTION</p>
                    <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/about" className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to="/contact" className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <hr className="w-1/2 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
            </ul>

            <div className="flex items-center gap-6">
                {sb ? <img onClick={() => { setShowSearch((prev) => !prev) }} src={assets.search_icon} className="cursor-pointer w-5" /> : ""}

                {/* Dropdown Hover Wrapper */}
                <div 
                    className="relative group"
                    onMouseEnter={() => setDropdownVisible(true)} // Show on hover
                    onMouseLeave={() => setDropdownVisible(false)} // Hide when mouse leaves
                >
                    <img 
                        src={assets.profile_icon} 
                        alt="Profile" 
                        className="cursor-pointer w-5" 
                    />

                    {/* Dropdown Menu */}
                    {token && dropdownVisible && (
                        <div 
                            ref={dropdownRef}
                            className="absolute right-0 pt-4 transition-opacity duration-300 opacity-100 z-50"
                        >
                            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-lg">
                                <p 
                                    className="cursor-pointer hover:text-black" 
                                    onClick={() => navigate("/orders")}
                                >
                                    My Orders
                                </p>
                                <p 
                                    className="cursor-pointer hover:text-black" 
                                    onClick={logout}
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Conditionally render Login button */}
                {!token && (
                    <button 
                        className="bg-black text-white font-light px-8 py-2 mt-0"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                )}

                <Link to="/cart" className="relative">
                    <img src={assets.cart_icon} className="w-5 min-w-5" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                        {getCartCount()}
                    </p>
                </Link>

                <img onClick={() => setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" />
            </div>

            {/* Sidebar for Small Screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
                <div className="flex flex-col text-gray-600">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
                        <img src={assets.dropdown_icon} className="h-4 rotate-180" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
