import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { SignInPage } from './pages/auth/signIn/SignInPage'
import { HomePage } from './pages/home/HomePage'
import { MemberDetailPage } from './pages/member/memberDetail/MemberDetailPage'
import { MemberListPage } from './pages/member/memberList/MemberListPage'
import { TeamListPage } from './pages/team/teamList/TeamListPage'
import { PrivateRoute } from './PrivateRoute'

export const Path = {
  signin: '/signin',
}

export const PrivatePath = {
  home: '/',
  teams: '/teams',
  members: '/members',
}

export const RouterConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path={Path.signin} element={<SignInPage />} />
      <Route
        path={PrivatePath.home}
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path={PrivatePath.teams}
        element={
          <PrivateRoute>
            <TeamListPage />
          </PrivateRoute>
        }
      />
      <Route
        path={PrivatePath.members}
        element={
          <PrivateRoute>
            <MemberListPage />
          </PrivateRoute>
        }
      />
      <Route
        path={`${PrivatePath.members}/:account_id`}
        element={
          <PrivateRoute>
            <MemberDetailPage />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
)
