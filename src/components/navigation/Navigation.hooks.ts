import { useNavigate } from 'react-router-dom'

import { route } from '../../RouteConfig'

export const useNavigation = () => {
  type Menu = {
    menu: string
    link: string
  }
  const menu: Menu[] = [
    { menu: 'Home', link: route.home },
    { menu: 'Teams', link: route.teams },
    { menu: 'Members', link: route.members },
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
