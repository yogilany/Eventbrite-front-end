import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import TextInputStyled from "../../../Components/TextInput/TextInput";
// import LoginMethodsCSS from "../../../AttendeesView/Login/Components/LoginMethods.module.scss";
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import axios from 'axios';
import { is } from 'date-fns/locale';
import { useSelector } from 'react-redux';
import { selectUserToken } from 'src/features/authSlice';

const AttendeeData = ({setIsSuccess,index, ticket, sendData, isPlaceorder,event, orderID,setIsCheckoutDone, isCheckoutDone, setIsCheckout,total}) => {
    console.log("orderrrrr idddd", orderID)
    const token = useSelector(selectUserToken);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [email, setEmail] = useState("");
    const [firstname, setFisrtName] = useState("");
    const [lastName, setLastName] = useState("");
    const [ attendee, setAttendee] = useState({})
    // console.log("attendee ticket",ticket)

    const handleChangeAttendee = (e) => {
        e.preventDefault();
        if(e.target.name === "firstname"){
            setFisrtName(e.target.value)  
        }
        if(e.target.name === "lastname"){
            setLastName(e.target.value)
        }
        if(e.target.name === "email"){
            setEmail(e.target.value)}

        // detect the event key and target and add the value to the state 
        setAttendee({...attendee, [e.target.name]: e.target.value})
        
        


    }

    const handleAddAttendee = async () => {
      console.log("trying to add attendee event", event)

      console.log("trying to add attendee", orderID)

      const Finalattendee = {
        "first_name": firstname,
        "last_name": lastName,
        "email": email,
        "type_of_reseved_ticket": ticket.ticket.type,
        "order_id": orderID,
        "event_id": event.id
      }

      console.log("Finalattendee",Finalattendee)


      try {
        console.log("trying to add attendee")
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_API}/attendees/${event.id}/add_attendee`,
          Finalattendee,
          {
            headers: { "Content-Type": "application/json" ,
            Authorization: `Bearer ${token}`}
          }
        );
        console.log("Res : ", response);
        if(response.status === 200){
          setIsSuccess(true)
        }
        if(index === total ){
          setIsCheckout(false)
        }
      } catch (error) {
        console.log(error);
      }

    }

   
useEffect( () => {

  if(orderID){

 

    handleAddAttendee();

   
  }

}, [orderID])




  

  return (

    <Form.Group
    className="p-0"
    style={{ width: "100%" }}>
          <h2 className="font-bold text-xl mb-2 mt-3">Ticket {index} • {ticket.ticket.type}
</h2>
      <div className=" grid grid-cols-2 gap-2 my-2">
      <Form.Floating
      // className={LoginMethodsCSS["form-floating"]}
    >
      <TextInputStyled
        id='login-email-input'
        data-testid='login-email-input'
        // {...register("email", { required: "Required" })}
        autoComplete="off"
        name="firstname"
        required
        value={firstname}
        onChange={handleChangeAttendee}
        type="text"
        isInvalid={errors?.email}
      />
      <label>First Name</label>
    </Form.Floating>
    <Form.Floating
      // className={LoginMethodsCSS["form-floating"]}
    >
      <TextInputStyled
        id='login-email-input'
        data-testid='login-email-input'
        autoComplete="off"
        required
        name="lastname"
        value={lastName}
        onChange={handleChangeAttendee}

        type="text"
        isInvalid={errors?.email}
      />
      <label>Last Name</label>
    </Form.Floating>

      </div>

      <Form.Floating
      // className={LoginMethodsCSS["form-floating"]}
    >
      <TextInputStyled
        id='login-email-input'
        data-testid='login-email-input'
        autoComplete="off"
        name="email"
        type="email"
        value={email}
        onChange={handleChangeAttendee}
        required
        isInvalid={errors?.email}
      />
      <label>Email Address</label>
    </Form.Floating>

   
  </Form.Group>
  )
}

export default AttendeeData