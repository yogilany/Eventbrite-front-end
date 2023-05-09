import React from 'react'
import { Form } from 'react-bootstrap'
import TextInputStyled from "../../../../Components/TextInput/TextInput";
import LoginMethodsCSS from "../../../AttendeesView/Login/Components/LoginMethods.module.scss";
import { useForm } from 'react-hook-form'
import { useState } from 'react';

const AttendeeData = ({index, ticket}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [email, setEmail] = useState("");
    const [fisrtName, setFisrtName] = useState("");
    const [lastName, setLastName] = useState("");

  return (

    <Form.Group
    className="p-0"
    style={{ width: "100%" }}>
          <h2 className="font-bold text-xl mb-2 mt-3">Ticket {index} • {ticket.ticket_info.name}
</h2>
      <div className=" grid grid-cols-2 gap-2 my-2">
      <Form.Floating
      className={LoginMethodsCSS["form-floating"]}
    >
      <TextInputStyled
        id='login-email-input'
        data-testid='login-email-input'
        // {...register("email", { required: "Required" })}
        autoComplete="off"
        name="firstname"
        required
        value={fisrtName}
        onChange={(e) => setFisrtName( e.target.value)}
        type="text"
        isInvalid={errors?.email}
      />
      <label>First Name</label>
    </Form.Floating>
    <Form.Floating
      className={LoginMethodsCSS["form-floating"]}
    >
      <TextInputStyled
        id='login-email-input'
        data-testid='login-email-input'
        {...register("email", { required: "Required" })}
        autoComplete="off"
        required
        name="lastname"
        value={lastName}
        onChange={(e) => setLastName( e.target.value)}

        type="text"
        isInvalid={errors?.email}
      />
      <label>Last Name</label>
    </Form.Floating>

      </div>

      <Form.Floating
      className={LoginMethodsCSS["form-floating"]}
    >
      <TextInputStyled
        id='login-email-input'
        data-testid='login-email-input'
        {...register("email", { required: "Required" })}
        autoComplete="off"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail( e.target.value)}
        required
        isInvalid={errors?.email}
      />
      <label>Email Address</label>
    </Form.Floating>

   
  </Form.Group>
  )
}

export default AttendeeData