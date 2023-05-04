import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const VerifyUser = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    // get parameters from url
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    console.log('Token = ', token);

    dispatch(VerifyUser(token))
  })
  return (
    <div>VerifyUser</div>
  )
}

export default VerifyUser