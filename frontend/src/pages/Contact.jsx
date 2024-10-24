import { assets } from "../assets/assets"
import NewsLetter from "../components/NewsLetter"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div>

      <div className="text-2xl border-t pt-10 text-center">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact_img}  />
        <div className="flex flex-col justify-center items-start gap-6">
            <p className="text-gray-600 font-semibold text-xl">Our Store</p>
            <p className="text-gray-500">58 Gittikhadan Metro Station <br /> Nagpur, India</p>
            <p className="text-gray-500">Tel: (522) 854-0142 <br />Email: pacificadmin@gmail.com</p>
            <p className="text-gray-600 font-semibold text-xl">Careers at Forever</p>
            <p className="text-gray-500">Learn more about Teams and Job Openings</p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div> 
      </div>

      <NewsLetter/>
    </div>
  )
}

export default Contact
