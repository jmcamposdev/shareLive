import PropTypes from 'prop-types'
import { createContext, useContext, useState, useMemo } from 'react'
import SendMessage from '../pages/WebPages/PasswordReset/SendMessage'
import AuthService from '../services/authService'
import useAlertToast from '../hooks/useToast'
import OPTInput from '../pages/WebPages/PasswordReset/OPTInput'
import Reset from '../pages/WebPages/PasswordReset/Reset'
import UserService from '../services/UserService'
import { useNavigate } from 'react-router-dom'

export const PasswordResetContext = createContext()

export const usePasswordReset = () => useContext(PasswordResetContext)

export const PasswordResetProvider = ({ children }) => {
  const navigate = useNavigate()
  const { toast } = useAlertToast()
  const [email, setEmail] = useState('')
  const [OPT, setOPT] = useState(undefined)
  const [OPTError, setOPTError] = useState('')
  const [step, setStep] = useState(0)

  const generateOPT = () => {
    const randomOPT = Math.floor(1000 + Math.random() * 9000)
    setOPT(randomOPT)
    return randomOPT
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  const renderStep = () => {
    switch (step) {
      case 0:
        return <SendMessage />
      case 1:
        return <OPTInput />
      default:
        return <Reset />
    }
  }

  const sendMessage = async (email) => {
    try {
      // Send email to reset password
      await AuthService.sendPasswordResetEmail(email, generateOPT())
      setEmail(email)
      toast.showSuccess('Email sent successfully')
      nextStep()
    } catch (error) {
      toast.showError(error.message)
    }
  }

  const verifyOPT = (reciveOPT) => {
    const isVerified = false
    if (reciveOPT === OPT) {
      nextStep()
      setOPTError('')
    } else {
      setOPTError('You have entered the wrong OPT')
    }
    return isVerified
  }

  const resetPassword = async (password) => {
    try {
      await UserService.resetPassword(email, password)
      navigate('/login')
      toast.showSuccess('Password reset successfully')
    } catch (error) {
      toast.showError(error.message)
    }
  }

  const contextValue = useMemo(() => ({
    step,
    OPT,
    email,
    OPTError,
    generateOPT,
    nextStep,
    prevStep,
    sendMessage,
    verifyOPT,
    resetPassword,
    renderStep
  }), [step, OPT, email, OPTError, generateOPT, nextStep, prevStep, sendMessage, verifyOPT, resetPassword, renderStep])

  return (
    <PasswordResetContext.Provider value={contextValue}>
      {children}
    </PasswordResetContext.Provider>
  )
}

PasswordResetProvider.propTypes = {
  children: PropTypes.node
}
