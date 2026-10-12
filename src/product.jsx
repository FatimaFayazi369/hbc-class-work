







import { useState } from "react";

function Product({intquantity, name, price, category,image}){
  
      const [quantit, setquantity]= useState(intquantity);
    return(
        <>
        <div className="w-120 overflow-hidden rounded-xl bg-white/20 shadow-lg p-10 center">
        <img
        src={image}
        alt={name}
        className="h-48 w-full object-cover"
      />

        <div className="p-5">
        <p className="text-sm text-blue-500">{category}</p>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="mt-2 text-gray-600">${price}</p>
        <p>Initial-Quantity: {intquantity}</p>
      </div>

        <button onClick={()=>setquantity(quantit+1)}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5"
        >increase</button>
        <span>Quantity:{quantit}</span>
        <button onClick={()=>setquantity(quantit-1)}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5"
        >decrease</button>
       </div>
        </>
    )
}
export default Product