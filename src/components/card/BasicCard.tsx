import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const BasicCard = (props: Props) => {
  const { children } = props

  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
