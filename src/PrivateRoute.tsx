import { Navigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'

import { Path } from './RouteConfig'
import { loginUserState } from './store/userState'

interface Props {
  children: JSX.Element
}

export const PrivateRoute = (props: Props) => {
  const { children } = props
  const [loginUser] = useRecoilState(loginUserState)

  return loginUser !== undefined ? children : <Navigate to={Path.signin} />
}
