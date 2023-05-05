import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logOut, verifyUser } from '../../../features/authSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router'
const VerifyUser = () => {
  const secondsBeforeRedirect = 5;
  const [verificationState, setVerificationState] = useState("undefined")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // get parameters from url
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    console.log('Token = ', token);
    dispatch(verifyUser(token)).unwrap(unwrapResult).then((result) => {
      setVerificationState(true)
      logOut()
      setTimeout(() => {
        navigate("/login", { replace: true })
      }, secondsBeforeRedirect * 1000)
    }).catch((err) => {
      setVerificationState(false)
      console.log(err);
    });
  }, [])
  switch (verificationState) {
    case true:
      return (
        <>
          <div className='d-flex justify-content-md-center'>Verified successfully</div>
        </>
      )
    case false:
      return (
        <div className='d-flex justify-content-md-center'>Verification failed</div>
      )
    default:
      return (<>
        <div className='d-flex justify-content-md-center'>Verification in progress...</div>
        <Spinner animation="border" role="status" />
      </>
      )
  }
}

export default VerifyUser