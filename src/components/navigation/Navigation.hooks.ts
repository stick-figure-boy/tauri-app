import { useNavigate } from 'react-router-dom'

import { PrivatePath } from '../../RouteConfig'

export const useNavigation = () => {
  type Menu = {
    menu: string
    link: string
  }
  const menu: Menu[] = [
    { menu: 'Home', link: PrivatePath.home },
    { menu: 'Teams', link: PrivatePath.teams },
    { menu: 'Members', link: PrivatePath.members },
  ]

  const navigate = useNavigate()

  const handleMovePage = (link: string) => {
    navigate(link)
  }

  return {
    menu,
    handleMovePage,
  }
}
