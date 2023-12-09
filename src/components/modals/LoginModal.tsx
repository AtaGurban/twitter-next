"use client"
import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import React, { useCallback, useState, ChangeEvent } from 'react'
import Input from '../Input'
import Modal from '../Modal'
const initLoginForm = {
  email: "",
  password: ""
}
const LoginModal = () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const [loginform, setLoginform] = useState(initLoginForm)
  const [loading, setLoading] = useState(false)

  
  const onToggle = useCallback(()=>{
    if (loading) return
    loginModal.onClose();
    registerModal.onOpen();
  }, [loading, registerModal, loginModal])

  const loginFormHandler = (event: ChangeEvent<HTMLInputElement>) =>{
    const {value, name} = event.target
    setLoginform(prev => ({...prev, [name]: value}))
  }
  const onSubmit = useCallback( async ()=>{
    try {
      setLoading(true)
      loginModal.onClose()
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }, [loginModal])
  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        onChange={loginFormHandler}
        value={loginform.email}
        disabled={loading}
        name={"email"}
      />
      <Input
        placeholder='Password'
        onChange={loginFormHandler}
        value={loginform.password}
        disabled={loading}
        name={"password"}
      />
    </div>
  )

  
  const footerContent = (
    <div className='text-neutral-400 text-center mt-4'>
      <p>First time using Twitter?
        <span onClick={onToggle} className='
          text-white
          cursor-pointer
          hover:underline
          ms-2
        '>
          Create an account
        </span>
      </p>
    </div>
  )

  return (
    <Modal
      disabled={loading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel='Sign in'
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default LoginModal