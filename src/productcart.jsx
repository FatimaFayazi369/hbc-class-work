function ProductCart({name="phone", price=30, category}){
    const size = 34
    return(
        <>
          <h1 className="text-3xl font-bold underline bg-red-500">
     Tailwind Css
    </h1>
        <h1>Product cart</h1>
        <h2>Product {name}</h2>
        <h2>Price:${price} </h2>
        {/* <img src="" alt="image"/> */}
        <p>Descriptions:{category}</p>

        <p>{size}</p>
        <h2>{"Available Product:"}{ size > 32 ? "large": "medium"}</h2>
        <button>Buy</button>
        </>
    )
}

export default ProductCart