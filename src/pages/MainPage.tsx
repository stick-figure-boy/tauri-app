import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import { Navigation } from '../components/navigation/Navigation'

// TODO
const drawerWidth = 240

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const MainPage = (props: Props) => {
  const { children } = props

  return (
    <Box sx={{ display: 'flex' }}>
      <Navigation />

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
