import { Route, Routes, BrowserRouter } from 'react-router-dom'

import { HomePage } from './pages/home/HomePage'
import { MemberListPage } from './pages/members/memberList/MemberListPage'
import { TeamListPage } from './pages/teams/teamList/TeamListPage'

export const route = {
  home: '/',
  teams: '/teams',
  members: '/members',
}

export const RouterConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path={route.home} element={<HomePage />} />
    </Routes>
    <Routes>
      <Route path={route.teams} element={<TeamListPage />} />
    </Routes>
    <Routes>
      <Route path={route.members} element={<MemberListPage />} />
    </Routes>
  </BrowserRouter>
)
