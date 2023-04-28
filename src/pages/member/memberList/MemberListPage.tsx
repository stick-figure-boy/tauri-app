import { MainPage } from '../../MainPage'

import { MemberOverView } from './components/memberOverview/MemberOverView'
import { useMemberListPage } from './MemberListPage.hooks'

export const MemberListPage = () => {
  const { members } = useMemberListPage()

  return (
    <MainPage>
      {members.map((m, _) => (
        <MemberOverView />
      ))}
    </MainPage>
  )
}
