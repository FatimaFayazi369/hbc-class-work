import { useState } from "react";
function messages(){
    const[message, setMassage] = useState(false)
    return(
        <>
        <h1>message:{message ? "wellcome": ""}</h1>
        <button onClick={()=>{setMassage(!message) }}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >click</button>
        </>
    )
}
export default messages


// import { useState } from "react";

// function Messages() {
//   const [message, setMessage] = useState(false);

//   return (
//     <>
//       <h1>
//         Message: {message ? "Welcome" : ""}
//       </h1>

//       <button
//         onClick={() => setMessage(!message)}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Click
//       </button>
//     </>
//   );
// }

// export default Messages;