import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { HomePage } from './pages/home/HomePage'
import { MemberListPage } from './pages/member/memberList/MemberListPage'
import { TeamListPage } from './pages/team/teamList/TeamListPage'

export const route = {
  home: '/',
  teams: '/teams',
  members: '/members',
}

export const RouterConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path={route.home} element={<HomePage />} />
      <Route path={route.teams} element={<TeamListPage />} />
      <Route path={route.members} element={<MemberListPage />} />
    </Routes>
  </BrowserRouter>
)
