

import {NavBar} from "../../components/Home/Navbar/Navbar";
import styled from "styled-components";
import {useState} from "react";
import {Navigate} from "react-router-dom";

const Main = styled.div`
width: 50%;
height: 350px;
border: 1px solid lightgrey;
padding: 1%;
display: flex;
flex-direction: column;
margin: 25px auto;
`

export const Payment = () => {
  const [card, setcard] = useState({
    cardNumber: "", 
    name : "", 
    cvv : "", 
    date: ""
  });

  const [show, setshow] = useState(false);

  const handleChange = (e) => {
      const {id, value} = e.target.value;
      setcard({
          ...card,
          [id]: value
      });
  }

  const handleSubmit = () => {
      alert("Processing your payment")
      setshow(true);
  }
    return  show ?  <Navigate to = {`/successful/`}></Navigate> : (
        <>
        <h1>Debit-Card Payment</h1>
        <Main>
            <form onSubmit = {() => {handleSubmit()}} style ={{display: "flex", flexDirection: "column", width: "50%", gap: "4%", margin: "auto", height: "80%"}} >
                <input onChange = {handleChange} id = "cardNumber" type="number" placeholder = "Enter Debit card Number" required/>
                <input onChange = {handleChange} id = "name" type="text" placeholder = "Enter Name on Card" required/>
                <input onChange = {handleChange} id = "cvv" type="number" placeholder = "Enter CVV"  required/>
                <input onChange = {handleChange} id = "date" type="date" name="" placeholder = "Enter Card Expiry Date "  required/>
                <input style = {{backgroundColor: "orange", color: "white"}} onChange = {handleChange} type="submit" value = "Proceed to Payment"/>
                </form>
        </Main>
        </>
    )
}