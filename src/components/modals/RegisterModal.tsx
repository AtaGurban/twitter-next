"use client"
import useLoginModal from '@/hooks/useLoginModal'
import useRegisterModal from '@/hooks/useRegisterModal'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import React, { useCallback, useState, ChangeEvent } from 'react'
import { toast } from 'react-hot-toast'
import Input from '../Input'
import Modal from '../Modal'
const initRegisterForm = {
  email: "",
  password: "",
  name: "",
  username: "",
}
const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [registerform, setRegisterform] = useState(initRegisterForm)
  const [loading, setLoading] = useState(false)

  const onToggle = useCallback(()=>{
    if (loading) return
    registerModal.onClose();
    loginModal.onOpen();
  }, [loading, registerModal, loginModal])

  const registerFormHandler = (event: ChangeEvent<HTMLInputElement>) =>{
    const {value, name} = event.target
    setRegisterform(prev => ({...prev, [name]: value}))
  }
  const onSubmit = useCallback( async ()=>{
    try {
      setLoading(true)
      await axios.post("api/register", registerform)
      toast.success("Account created.")
      signIn("credentials", registerform)
      registerModal.onClose()
    } catch (error) {
      toast.error("error")
      console.log(error);
    } finally {
      setLoading(false)
    }
  }, [registerModal, registerform])
  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Input
        placeholder='Email'
        onChange={registerFormHandler}
        value={registerform.email}
        disabled={loading}
        name={"email"}
      />
      <Input
        placeholder='Name'
        onChange={registerFormHandler}
        value={registerform.name}
        disabled={loading}
        name={"name"}
      />
      <Input
        placeholder='Username'
        onChange={registerFormHandler}
        value={registerform.username}
        disabled={loading}
        name={"username"}
      />
      <Input
        placeholder='Password'
        onChange={registerFormHandler}
        value={registerform.password}
        disabled={loading}
        name={"password"}
      />
    </div>
  )

  const footerContent = (
    <div className='text-neutral-400 text-center mt-4'>
      <p>Already have an account?
        <span onClick={onToggle} className='
          text-white
          cursor-pointer
          hover:underline
          ms-2
        '>
          Sign in
        </span>
      </p>
    </div>
  )
  return (
    <Modal
      disabled={loading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel='Register'
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal