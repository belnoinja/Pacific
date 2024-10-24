import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
      
    <div>
        <Link to="/"><img src={assets.logo} alt="" className="w-32 mb-5" /></Link>
        <p className="w-full md:w-2/3 text-gray-600">
        At Pacific, we are committed to delivering top-quality products with exceptional service. Our focus is on making fashion accessible, comfortable, and stylish for everyone. Join us on our journey to redefine the way you shop and dress!
        </p>
    </div>

    <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/orders">Delivery</Link>
            <Link to="/policy">Privacy Policy</Link>
        </ul>
    </div>

    <div>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>pacificbrandstore@gmail.com</li>
        </ul>
    </div>
    </div>

    <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ pacific.com - All Right Reserved.</p>
    </div>

    </div>
  )
}

export default Footer
