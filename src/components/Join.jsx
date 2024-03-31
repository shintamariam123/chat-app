import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Join() {

  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  console.log(userName);


  const goToChat = () => {
    if (userName) {
      navigate('/chat', { state: userName })
    }
    else {
      alert("Enter Your Username")
    }
  }

  return (
    <>
      <div style={{ height: '100vh', backgroundColor: "black" }} className='d-flex justify-content-center align-items-center'>
      
       <div className='d-flex flex-column justify-content-center align-items-center'>
          <h1 style={{ color: 'yellow' }} className='headind1 mb-2'>CHAT APP</h1>

          <img width={'30%'} className='img-fluid mb-4 rounded' src="https://static.vecteezy.com/system/resources/previews/000/518/121/original/vector-man-and-woman-with-smartphones-concept-illustration-texting-messaging-chatting-social-media-customer-assistance-dating-communication.jpg" alt="" />
          <div>
            <input type="text" onChange={(e) => setUserName(e.target.value)} className='form-control rounded' placeholder='Enter your Name' />
            <button onClick={goToChat} className="btn btn-warning mt-2 w-100 start">Start Chat</button>
          </div>
        </div>
        
        
      
         
      </div>
    </>
  )
}

export default Join