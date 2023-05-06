import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { authRepository } from '../../../repository/auth/authRepository'
import { ErrResponse } from '../../../repository/error'
import { PrivatePath } from '../../../RouteConfig'
import { loginUserState } from '../../../store/userState'
import { MemberVM } from '../../../viewModel/memberVM'

const repository = authRepository()

export const useSignIn = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isOpenErrSnackBar, setIsOpenErrSnackBar] = useState(false)
  const [errSnackBarMsg, setErrSnackBarMsg] = useState('')
  const [, setLoginUser] = useRecoilState(loginUserState)

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleCloseErrSnackBar = () => {
    setIsOpenErrSnackBar(false)
  }

  const signIn = () => {
    repository
      .signIn({ email, password })
      .then((res) => {
        setLoginUser(MemberVM.parseToVM(res))
        navigate(PrivatePath.home)
      })
      .catch((e: ErrResponse) => {
        setErrSnackBarMsg(e.messages.join('\n'))
        setIsOpenErrSnackBar(true)
      })
  }

  return {
    email,
    password,
    isOpenErrSnackBar,
    errSnackBarMsg,
    handleChangeEmail,
    handleChangePassword,
    handleCloseErrSnackBar,
    signIn,
  }
}
