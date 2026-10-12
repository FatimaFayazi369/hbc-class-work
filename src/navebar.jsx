import { Link } from "react-router-dom"


function Navebar(){
    return(
        <>
        <h1>logo</h1>
        <Link to="/home">Home</Link> <br/>
       <Link to="/form">Form</Link>   <br/>
        <Link to="/product">Products</Link> <br/>
         <Link to="/products">Products2</Link> <br/>
        </>
    )
}
export default Navebar