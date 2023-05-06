import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'

import { IconButton } from '../../../../../components/button/IconButton'
import { RadarChart } from '../../../../../components/chart/radarChart/RadarChart'
import { iconType } from '../../../../../components/icon/Icon'
import { MemberVM } from '../../../../../viewModel/member/model'

import { useMemberOverView } from './MemberOverView.hooks'

interface Props {
  member: MemberVM
}

export const MemberOverView = (props: Props) => {
  const { member } = props
  const { chartData, handleMoveDetail } = useMemberOverView()

  return (
    <Card>
      <CardHeader
        avatar={<Avatar alt={member.name} src={member.avatarUrl} />}
        title={member.name}
        subheader={member.team.name}
      />
      <CardContent>
        <RadarChart chartData={chartData} />
        <IconButton
          type={iconType.readMore}
          onClick={() => {
            handleMoveDetail(member.accountId)
          }}
        />
      </CardContent>
    </Card>
  )
}
