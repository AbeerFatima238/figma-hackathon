// import React from 'react'
// import Herosection from './Herosection/page'
// import Herosection2 from './Herosection2/page'
// import Herosection3 from './Herosection3/page'
// import Herosection4 from './Herosection4/page'
// const page = () => {
//   return (
//     <div>
// <Herosection/>
// <Herosection2/>
// <Herosection3/>
// <Herosection4/>
//     </div>
//   )
// }
// export default page

import { sanityFetch } from "@/sanity/lib/fetch";
import Product from "./Product/page";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image";


type Product = {
  _id:string;
  name:string,
  description:string,
  price:number,
  discountpercentage:number
  category:string,
  stocklevel:number,
  isFeaturedProduct:boolean,
  imageUrl:string,
}

export default async function Home (){
  const products: Product[] = await sanityFetch({query : allproducts})
  return(
    <div>
      <div className="grid grid-cols-3 gap-4">
       {
        products.map((product)=>(
          <div className="border p-4 rounded-lg shadow-sm flex flex-col items-center"key={product._id}>
            <Image src ={product.imageUrl} alt={product.name} className="w-60" height={500} width={500}/>
            <h2 className="text-xl font-bold text-center">
              {product.name}
            </h2>
            <p className="text-center">
            {product.description}
            </p>
            <h3 className="text-center">
            {product.price}
            </h3>
          <p className="text-center">{product.stocklevel}</p>
          <p className="text-center">{product.discountpercentage}</p>
          <p className="text-center">{product.category}</p>
          <p className="text-center">{product.isFeaturedProduct}</p>
          </div>
        ))
       }
      </div>
    </div>
  )
}
