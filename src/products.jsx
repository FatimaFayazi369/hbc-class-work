import { useState } from "react"

function Products(){
    const [search, setSearch] = useState("")
    const items=[  {name:"laptop1", price:1},  {name:"laptop2", price:2},  {name:"laptop3", price:3}]
      
    const options = items.filter((item)=>{
        item.name.toLowerCase().includes(search.toLowerCase())
    })
    return(
        <>
        <label htmlFor="">search</label>
        <input type="text" 
        onChange={(e)=> setSearch(e.target.value)}/>
    {console.log(search)}
        <ul>
            {
                options.map((e)=>{
                    <li>{e.name}:{e.price}</li>
                })
            }
            <li>{items.map((e)=>{
                <li>{e.name}</li>
            })}</li>
        </ul>
      
        </>
    )

}

export default Products