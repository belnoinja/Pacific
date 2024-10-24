import  { useContext, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";



const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // To display success or error messages
  const {  backendUrl } = useContext(ShopContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${backendUrl}/api/subscribe`, { email });
      setMessage(response.data.message); // Set success message
      setEmail(""); // Clear the input field
    } catch (error) {
      // Handle error response
      if (error.response) {
        setMessage(error.response.data.message); // Display the error message from the server
      } else {
        setMessage("An error occurred. Please try again."); // Generic error message
      }
    }
  };

  return (
    <div className="text-center">
      <p className="font-medium text-2xl text-gray-800">Subscribe Now and get New Updates</p>
      <p className="text-gray-400 mt-3">
        Stay updated with our latest news and exclusive offers!
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter Your E-Mail"
          required
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
        />
        <button className="text-white text-xs py-4 px-10 bg-black">SUBSCRIBE</button>
      </form>
      {message && <p className="mt-3 text-green-500">{message}</p>} {/* Display messages */}
    </div>
  );
};

export default NewsLetter;
