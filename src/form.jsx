import { div } from "framer-motion/client";
import { useState } from "react";
import { Link } from "react-router-dom";
 function Form(){
    const [form, setFrom]=useState("")
      const [email, setEmail]=useState("")
  const [number, setNumber]=useState("")
    function handelform(e){
        setFrom(e.target.value)
    }
      function handlemail(e){
        setEmail(e.target.value)
    }

      function handlnumber(e){
        setNumber(e.target.value)
    }

    function wlcome(){
        alert('welcome:' +""+ form + number + email)
    }

    function submit(){
        alert('Form submitted:' + ""+ form + number + email)
    }

    // function handlsubmit(e){
    //    e.preventDefault();
    //    < form.map(
    //     <h1>{form}</h1>
    //     <p>{email}</p>
    //     <p>{number}</p>
    //     )/>
      
    // }
    return(
        <>
        <h1>submision from</h1>
         <Link to="/message">
       see message...
      </Link>
        <p>{form}</p>
        <label htmlFor="text"  > Name</label>
        <input type="text" onChange={handelform} className="border-r-amber-100 my-3" />

         <p className="border-r-amber-100 text-cyan-950 my-3">{email}</p>
        <label htmlFor="text" className="border-r-amber-100 text-cyan-950 my-3" > Email</label>
        <input type="email" onChange={handlemail} className="border-r-amber-100 rounded my-3" />
        <br />

         <p className="border-r-amber-100 text-cyan-950 my-3">{number}</p>
        <label htmlFor="text"  > Number</label>
        <input type="number" onChange={handlnumber} className="border-r-amber-100 rounded my-3" />
        <br />

        <button onClick={wlcome}   class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">Click</button> <br/>
        <button onClick={submit}   class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">Submit</button>
        </>
    )
 }
 export default Form