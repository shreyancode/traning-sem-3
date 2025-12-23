import React, { useState } from 'react'

export default function Home() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [msg,setMsg] = useState("")
  const [language,setLanguage] = useState("")
  const [food,setFood] = useState("")

  const handleSubmission = (e)=>{
    e.preventDefault()

    const formData = {
      name : name,
      email : email,
      msg : msg,
      language : language,
      food : food
    }
console.log(formData)
  }
  return (
    <>
    <br />
    <br />
    <form  className="form" onSubmit={handleSubmission}>
    <div className="form-group">
      <input type="text" placeholder='Enter your name' onChange={(e)=>{setName(e.target.value)}} />
    </div>

     <div className="form-group">
      <input type="email" placeholder='Enter your email' onChange={(e)=>{setEmail(e.target.value)}} />
    </div>

     <div className="form-group">
      <textarea  placeholder='Enter your feedback' onChange={(e)=>{setMsg(e.target.value)}} />
    </div>
    
    <div className="form-group">
      <label htmlFor="fav_language_input">Choose your Fav Language</label><br></br>
  <input type="radio" name='fav_language' value="c++" onChange={(e)=>{setLanguage(e.target.value)}}/>
  <label htmlFor="c++">C++</label>

   <input type="radio" name='fav_language' value="c" onChange={(e)=>{setLanguage(e.target.value)}}/>
  <label htmlFor="c">C</label>

   <input type="radio" name='fav_language' value="js" onChange={(e)=>{setLanguage(e.target.value)}} />
  <label htmlFor="js">js</label>
    </div>

    <div className="form-group">

<label htmlFor="Food">Choose your Fav food  </label>
    <select
  id="food"
  value={food}
  onChange={(e) => setFood(e.target.value)}
>
  <option value="momo">MOMO</option>
  <option value="coke">Coke</option>
  <option value="burgers">Burgers</option>
</select>

    </div>

   <button className='btn' type='submit'>Submit</button>
    </form>
  </>
  )
}
