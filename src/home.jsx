import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const field = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [form, setForm] = useState(field);
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    const next = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(next);

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  }

 
  function validate(form) {
    const errors = {};

    if (!form.name.trim()) {
      errors.name = "Name is required";
    }
    
    // else if (form.name.trim().length < 2) {
    //   errors.name = "Name must be at least 2 characters";
    // }

  
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())
    ) {
      errors.email = "Please enter a valid email address";
    }

  
    if (!form.subject.trim()) {
      errors.subject = "Subject is required";
    }
    
    // else if (form.subject.trim().length < 3) {
    //   errors.subject = "Subject must be at least 3 characters";
    // }

  
    if (!form.message.trim()) {
      errors.message = "Message is required";
    }
    
    // else if (form.message.trim().length < 10) {
    //   errors.message = "Message must be at least 10 characters";
    // }

    return errors;
  }


  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate(form);

    setErrors(validationErrors);


    if (Object.keys(validationErrors).length > 0) {
      return;
    }

   
    console.log("Form submitted:", form);

    alert("Form submitted successfully!");

  
    setForm(field);
    setErrors({});
  }

  return (
    <>
      <h1>Home Page</h1>

      <Link to="/home">
        Go to Form
      </Link>

      <form onSubmit={handleSubmit}>

   
        <div>
          <label>Name</label>

          <input
            type="text"
            value={form.name}
            onChange={handleChange}
            name="name"
          />

          {errors.name && (
            <p style={{ color: "red" }}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label>Email</label>

          <input
            type="email"
            value={form.email}
            onChange={handleChange}
            name="email"
          />

          {errors.email && (
            <p style={{ color: "red" }}>
              {errors.email}
            </p>
          )}
        </div>

  
        <div>
          <label>Subject</label>

          <input
            type="text"
            value={form.subject}
            onChange={handleChange}
            name="subject"
          />

          {errors.subject && (
            <p style={{ color: "red" }}>
              {errors.subject}
            </p>
          )}
        </div>

  
        <div>
          <label>Message</label>

          <textarea
            value={form.message}
            onChange={handleChange}
            name="message"
            rows="5"
          />

          {errors.message && (
            <p style={{ color: "red" }}>
              {errors.message}
            </p>
          )}
        </div>

   
        <button type="submit">
          Send
        </button>

      </form>
    </>
  );
}

export default Home;















// import { useState } from "react"
// import { Route } from "react-router-dom"
// import { Link } from "react-router-dom"
// function Home(){
//     const [name, setName]= useState("")

//     const feild= {
//         name: "",
//         email:""
//     }
//      const [form, setForm]= useState(feild)

//      function handlechange(e){
//         const next ={...form,[e.target.name]:e.target.value}
//         setForm(next)
//      }
//     return(
//         <>
//         <h1>Home Page</h1>
//            <Link to="/home">
//         Go to Form
//       </Link>
//         <form>
//             <label htmlFor="">Name</label>
//         <input type="text" value={form.name} onChange={handlechange} name="firstname"/>
//         <label>Email</label>
//          <input type="email" value={form.email} onChange={handlechange} name="email"/>
//         </form>

      
     
       
//         </>
//     )
// }

// export default Home