import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductItem from "./ProductItem";


const BestSeller = () => {

    const {products} = useContext(ShopContext)
    const [bestSeller,setBestSeller] = useState([]);
    
    useEffect(()=>{
        const bestProduct = products.filter((item)=>item.bestSeller);
        setBestSeller(bestProduct.slice(0,5));
    },[products])

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLER"}/>
        <p className="w-3/4 m-auto text-xs md:text-base sm:text-sm text-gray-600">
        Check out our best-selling items, loved by customers for their style and comfort. Shop the favorites that are flying off the shelves!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-gray-600">
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name}/>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller