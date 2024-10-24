import { useContext, useEffect } from "react"
import BestSeller from "../components/BestSeller"
import Hero from "../components/Hero"
import LatestCollection from "../components/LatestCollection"
import NewsLetter from "../components/NewsLetter"
import OurPolicy from "../components/OurPolicy"
import { ShopContext } from "../context/ShopContext"

const Home = () => {
  const {setSb} =  useContext(ShopContext);
  useEffect(()=>{
    setSb(false);
  })
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetter/>
    </div>
  )
}

export default Home
