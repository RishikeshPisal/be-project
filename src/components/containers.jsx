import { useState } from 'react'
import '../App.css'

export function LeftContainer() {
  return (
    <div className="left-container container card">
      <h1>Left Container</h1>
    </div>
  )
}



export function RegistrationForm() {
  function handleName(id){
    // console.log(this.id)
  }
  return (
    <form >
      <input type="text" name="fisrtName" id="lastName" onChange={handleName} /> 
      <input type="text" name="lastName" id="lastName"  onChange={handleName} /> 
    </form>
  );
}
// export function LoginForm() {
//   return(
//     <>
//     </>

//     )
// }
export function RightContainer() {
  return (
    <div className="right-container container card">
      <RegistrationForm />
    </div> 

  )
}